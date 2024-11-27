const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})

// pool.query('SELECT * FROM estudiantes')
//     .then(result => {
//         // console.log(result.rows); //rows, fields, command, rowCount
//     });

//CAPTURA DE ERRORES EN CONSULTAS EN NODE.JS

// Errores SQLSTATE:
// PostgreSQL utiliza códigos de error de cinco caracteres basados en el estándar SQLSTATE para categorizar errores.

// Violación de restricción de integridad:
// 23505 - unique_violation: Intento de insertar un valor duplicado en una columna con restricción UNIQUE.
// 23503 - foreign_key_violation: Violación de una clave foránea.
// 23502 - not_null_violation: Intento de insertar NULL en una columna con restricción NOT NULL.


// const ejemplo = async(nombre, edad) =>{
//     try{
//         const query = 'INSERT INTO estudiantes (nombre, edad, curso) VALUES ($1, $2, $3)'
//         const values = ['Juan', 20, 'Química']
//         const result = await pool.query(query, values)
//         console.log('Estudiante insertado:', result.rowCount);
//     }catch(error){
//         console.log(error)
//         if(error.code === '23505'){
//             console.error('Error: Violación de clave única. Ya existe un estudiante con ese nombre.');
//         }
//         else if(error.code === '23503'){
//             console.error('Error: Violación de una clave foránea.');
//         }
//         else if(error.code === '23502'){
//             console.error('Intento de insertar NULL en una columna con restricción NOT NULL..');
//         } else{
//             console.error('Error inesperado:', error.message);
//         }

//     }
// }
// ejemplo()

// const insertarCategorias = async () => {
//     try{
//         const query = 'INSERT INTO categorias (nombre) VALUES ($1);'
//         const values = ['Ficción']

//         console.log('Intentando insertar categorías...');
//         await pool.query(query, values);
//         console.log('Categoría "Ficción" insertada correctamente.');

//         //insertar categoria duplicada
//         await pool.query(query, values);

//     }catch(error){
//         console.log(error)
//         if(error.code=== '23505'){
//             console.error('Error: Violación de clave única en "categorias.nombre".');
//         }else {
//             console.error('Error inesperado:', error.message);
//         }

//     }
// }
// // insertarCategorias()
// const insertarLibros = async () =>{
//     try{
//         const query = 'INSERT INTO libros_dos (titulo, categoria_id) VALUES ($1, $2);'
//         // const values = ['El Principito', null]
//         const values = ['El Principito', 999]
//         await pool.query(query, values);
//     }catch(error){
//         // console.log(error)
//         if(error.code=== '23502'){
//             console.error('Error: La columna "categoria_id" no permite valores NULL');
//         }else if(error.code=== '23503'){
//             console.error('Error: Violación de clave foránea en "libros.categoria_id".');
//         }
//         else {
//             console.error('Error inesperado:', error.message);
//         }

//     }
// }
// insertarLibros()


//---------------------------------------------------------------------------------

//ejercicios:
// Paso 1: Crear la base de datos y las tablas
// Crea una base de datos llamada bootcamp.
// Dentro de bootcamp, crea dos tablas:

// curso:
// id (entero, clave primaria, autoincremental).
// nombre (texto, con restricción UNIQUE y NOT NULL).

// estudiante:
// id (entero, clave primaria, autoincremental).
// nombre (texto, con restricción UNIQUE y NOT NULL).
// curso_id (entero, clave foránea que referencia a curso.id y no permite valores NULL).

// Paso 2: Realizar los siguientes ejercicios

// Ejercicio 1: Inserta dos cursos con el mismo nombre en la tabla cursos y captura el error 23505.
// Respuesta esperada: El primer registro debe ser exitoso. El segundo debe generar un error que indique:
// "Error: Violación de clave única en 'cursos.nombre'."

// Ejercicio 2: Inserta un estudiante con cursos_id = NULL para capturar el error 23502. Luego, intenta insertar un estudiante con un cursos_id que no exista en la tabla cursos para capturar el error 23503.
// Respuesta esperada:
// Inserción con NULL: "Error: La columna 'cursos_id' no permite valores NULL."
// Inserción con cursos_id inexistente: "Error: Violación de clave foránea en 'estudiantes.categoria_id'."
