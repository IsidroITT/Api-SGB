const autores = [
    { id: "1", nombre: "Douglas Adams", nacionalidad: "British", edad: 49 },
    { id: "2", nombre: "George Orwell", nacionalidad: "British", edad: 46 },
    { id: "3", nombre: "Harper Lee", nacionalidad: "American", edad: 89 },
    { id: "4", nombre: "J.D. Salinger", nacionalidad: "American", edad: 91 },
    { id: "5", nombre: "F. Scott Fitzgerald", nacionalidad: "American", edad: 44 },
    { id: "6", nombre: "Herman Melville", nacionalidad: "American", edad: 72 },
    { id: "7", nombre: "Jane Austen", nacionalidad: "British", edad: 41 },
    { id: "8", nombre: "J.R.R. Tolkien", nacionalidad: "British", edad: 81 },
    { id: "9", nombre: "J.K. Rowling", nacionalidad: "British", edad: 58 },
    { id: "10", nombre: "Fyodor Dostoevsky", nacionalidad: "Russian", edad: 59 }
];

const libros = [
    { id: "1", titulo: "1984", autor: autores[1], isbn: "1920ABC", publicacion: "1949", paginas: 328 },
    { id: "2", titulo: "Orgullo y Prejuicio", autor: autores[6], isbn: "1920ABD", publicacion: "1813", paginas: 432 },
    { id: "3", titulo: "Matar a un Ruiseñor", autor: autores[2], isbn: "1920ACD", publicacion: "1960", paginas: 281 },
    { id: "4", titulo: "El Guardián Entre el Centeno", autor: autores[3], isbn: "192CDF0", publicacion: "1951", paginas: 277 },
    { id: "5", titulo: "El Gran Gatsby", autor: autores[4], isbn: "192CDE1", publicacion: "1925", paginas: 180 },
    { id: "6", titulo: "Moby Dick", autor: autores[5], isbn: "192CDF2", publicacion: "1851", paginas: 635 },
    { id: "7", titulo: "Guía del Autoestopista Galáctico", autor: autores[0], isbn: "192CDF3", publicacion: "1979", paginas: 224 },
    { id: "8", titulo: "El Señor de los Anillos", autor: autores[7], isbn: "192CDF4", publicacion: "1954", paginas: 1178 },
    { id: "9", titulo: "Harry Potter y la Piedra Filosofal", autor: autores[8], isbn: "192CDF5", publicacion: "1997", paginas: 223 },
    { id: "10", titulo: "Crimen y Castigo", autor: autores[9], isbn: "192CDF6", publicacion: "1866", paginas: 545 }
];

const usuarios = [
    {id: "1", nombre: "Isidro", apellido: "Flores", email: "hola@gmail.com", telefono: "1234567890"},
    {id: "2", nombre: "María", apellido: "González", email: "maria@gmail.com", telefono: "0987654321"},
    {id: "3", nombre: "Juan", apellido: "Pérez", email: "juan@gmail.com", telefono: "1122334455"},
    {id: "4", nombre: "Ana", apellido: "Martínez", email: "ana@gmail.com", telefono: "6677889900"},
    {id: "5", nombre: "Carlos", apellido: "Rodríguez", email: "carlos@gmail.com", telefono: "2233445566"},
    {id: "6", nombre: "Lucía", apellido: "Hernández", email: "lucia@gmail.com", telefono: "3344556677"},
    {id: "7", nombre: "David", apellido: "López", email: "david@gmail.com", telefono: "4455667788"},
    {id: "8", nombre: "Laura", apellido: "García", email: "laura@gmail.com", telefono: "5566778899"},
    {id: "9", nombre: "José", apellido: "Sánchez", email: "jose@gmail.com", telefono: "6677889901"},
    {id: "10", nombre: "Marta", apellido: "Díaz", email: "marta@gmail.com", telefono: "7788990011"}
];

const prestamos = [
    { id: "1", libro: libros[0], usuario: usuarios[0], fechaPrestamo: "2023-03-01", fechaDevolucion: "2023-04-12"},
    { id: "2", libro: libros[1], usuario: usuarios[1], fechaPrestamo: "2024-01-15", fechaDevolucion: "2024-02-15"},
    { id: "3", libro: libros[2], usuario: usuarios[2], fechaPrestamo: "2023-05-01", fechaDevolucion: "2023-06-01"},
    { id: "4", libro: libros[3], usuario: usuarios[3], fechaPrestamo: "2024-03-01", fechaDevolucion: "2024-03-31"},
    { id: "5", libro: libros[4], usuario: usuarios[4], fechaPrestamo: "2023-11-20", fechaDevolucion: "2023-12-20"},
    { id: "6", libro: libros[5], usuario: usuarios[5], fechaPrestamo: "2024-02-10", fechaDevolucion: "2024-03-10"},
    { id: "7", libro: libros[6], usuario: usuarios[6], fechaPrestamo: "2023-09-01", fechaDevolucion: "2023-09-30"},
    { id: "8", libro: libros[7], usuario: usuarios[7], fechaPrestamo: "2024-04-01", fechaDevolucion: "2024-05-01"},
    { id: "9", libro: libros[8], usuario: usuarios[8], fechaPrestamo: "2023-07-01", fechaDevolucion: "2023-08-01"},
    { id: "10", libro: libros[9], usuario: usuarios[9], fechaPrestamo: "2023-10-15", fechaDevolucion: "2023-11-15"}
];



module.exports = {
    autores,
    libros,
    prestamos,
    usuarios
}