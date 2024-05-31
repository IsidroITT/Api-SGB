const { autores, libros, prestamos, usuarios } = require('./data');
const { v4: uuidv4 } = require('uuid');

const resolvers = {
    Query: {
        getLibros: () => libros,
        getLibro: (_, { id }) => libros.find(libro => libro.id === id),
        getAutores: () => autores,
        getAutor: (_, { id }) => autores.find(autor => autor.id === id),
        getPrestamos: () => prestamos,
        getPrestamo: (_, { id }) => prestamos.find(prestamo => prestamo.id === id),
        getUsuarios: () => usuarios,
        getUsuario: (_, { id }) => usuarios.find(usuario => usuario.id === id),
    },
    Mutation: {
        addLibro: (_, { titulo, autor, isbn, publicacion, paginas }) => {
            const nuevoLibro = { id: uuidv4(), titulo, autor, isbn, publicacion, paginas };
            libros.push(nuevoLibro);
            return nuevoLibro;
        },
        addAutor: (_, { nombre, nacionalidad, edad }) => {
            const nuevoAutor = { id: uuidv4(), nombre, nacionalidad, edad };
            autores.push(nuevoAutor);
            return nuevoAutor;
        },
        addPrestamo: (_, { libro, usuario, fechaPrestamo, fechaDevolucion }) => {
            const nuevoPrestamo = { id: uuidv4(), libro, usuario, fechaPrestamo, fechaDevolucion };
            prestamos.push(nuevoPrestamo);
            return nuevoPrestamo;
        },
        addUsuario: (_, { nombre, apellido, email, telefono }) => {
            const nuevoUsuario = { id: uuidv4(), nombre, apellido, email, telefono };
            usuarios.push(nuevoUsuario);
            return nuevoUsuario;
        },

        removeLibro: (_, { id }) => {
            const index = libros.findIndex(libro => libro.id === id);
            if (index === -1) throw new Error('Libro no encontrado');
            return libros.splice(index, 1)[0];
        },
        removeAutor: (_, { id }) => {
            const index = autores.findIndex(autor => autor.id === id);
            if (index === -1) throw new Error('Autor no encontrado');
            return autores.splice(index, 1)[0];
        },
        removePrestamo: (_, { id }) => {
            const index = prestamos.findIndex(prestamo => prestamo.id === id);
            if (index === -1) throw new Error('Préstamo no encontrado');
            return prestamos.splice(index, 1)[0];
        },
        removeUsuario: (_, { id }) => {
            const index = usuarios.findIndex(usuario => usuario.id === id);
            if (index === -1) throw new Error('Usuario no encontrado');
            return usuarios.splice(index, 1)[0];
        },

        updateLibro: (_, { id, titulo, autor, isbn, publicacion, paginas }) => {
            const libro = libros.find(libro => libro.id === id);
            if (!libro) throw new Error('Libro no encontrado');
            libro.titulo = titulo || libro.titulo;
            libro.autor = autor || libro.autor;
            libro.isbn = isbn || libro.isbn;
            libro.publicacion = publicacion || libro.publicacion;
            libro.paginas = paginas || libro.paginas;
            return libro;
        },
        updateAutor: (_, { id, nombre, nacionalidad, edad }) => {
            const autor = autores.find(autor => autor.id === id);
            if (!autor) throw new Error('Autor no encontrado');
            autor.nombre = nombre || autor.nombre;
            autor.nacionalidad = nacionalidad || autor.nacionalidad;
            autor.edad = edad || autor.edad;
            return autor;
        },
        updatePrestamo: (_, { id, libro, usuario, fechaPrestamo, fechaDevolucion }) => {
            const prestamo = prestamos.find(prestamo => prestamo.id === id);
            if (!prestamo) throw new Error('Préstamo no encontrado');
            prestamo.libro = libro || prestamo.libro;
            prestamo.usuario = usuario || prestamo.usuario;
            prestamo.fechaPrestamo =  fechaPrestamo || prestamo.fechaPrestamo;
            prestamo.fechaDevolucion = fechaDevolucion || prestamo.fechaDevolucion;
            return prestamo;
        },
        updateUsuario: (_, { id, nombre, apellido, email, telefono }) => {
            const usuario = usuarios.find(usuario => usuario.id === id);
            if (!usuario) throw new Error('Usuario no encontrado');
            usuario.nombre = nombre || usuario.nombre;
            usuario.apellido = apellido || usuario.apellido;
            usuario.email = email || usuario.email;
            usuario.telefono = telefono || usuario.telefono;
            return usuario;
        },
    }
}

module.exports = resolvers;