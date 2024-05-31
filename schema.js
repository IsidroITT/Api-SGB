const { gql } = require('apollo-server');

module.exports = gql(`
    type Libro {
        id: ID!
        titulo: String!
        autor: Autor!
        isbn: String!
        publicacion: String!
        paginas: Int!
    }

    type Autor {
        id: ID!
        nombre: String!
        nacionalidad: String!
        edad: Int!
    }

    type Prestamo {
        id: ID!
        libro: Libro!
        usuario: Usuario!
        fechaPrestamo: String!
        fechaDevolucion: String
    }
    
    type Usuario {
        id: ID!
        nombre: String!
        apellido: String!
        email: String!
        telefono: String!
    }

    type Query {
        getLibros: [Libro!]!
        getLibro (id: ID!): Libro
        getAutores: [Autor!]!
        getAutor (id: ID!): Autor
        getPrestamos: [Prestamo!]!
        getPrestamo (id: ID!): Prestamo
        getUsuarios: [Usuario!]!
        getUsuario (id: ID!): Usuario
    }

    type Mutation {
        addLibro(titulo: String!, autor: String!, isbn: String!, publicacion: String!, paginas: Int!):Libro!
        addAutor(nombre: String!, nacionalidad: String!, edad: Int!):Autor!
        addPrestamo(libro: String!, usuario: String!, fechaPrestamo: String!, fechaDevolucion: String):Prestamo!
        addUsuario(nombre: String!, apellido: String!, email: String!, telefono: String!):Usuario!
    
        removeLibro(id: ID!):Libro!
        removeAutor(id: ID!):Autor!
        removePrestamo(id: ID!):Prestamo!
        removeUsuario(id: ID!):Usuario!
    
        updateLibro(id: ID!, titulo: String, autor: String, isbn: String, publicacion: String, paginas: Int):Libro!
        updateAutor(id: ID!, nombre: String, nacionalidad: String, edad: Int):Autor!
        updatePrestamo(id: ID!, libro: String, usuario: String, fechaPrestamo: String, fechaDevolucion: String):Prestamo!
        updateUsuario(id: ID!, nombre: String, apellido: String, email: String, telefono: String):Usuario!
    }
`)