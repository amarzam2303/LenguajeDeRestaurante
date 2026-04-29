// Importamos los módulos necesarios
const express = require("express"); // Importa el framework para crear el servidor web
const mysql = require("mysql2"); // Importa el cliente para conectarnos a MySQL
const cors = require("cors"); // Importa el módulo CORS (Cross-Origin Resource Sharing), que permite que el servidor acepte solicitudes desde un dominio diferente al suyo

// Creamos una instancia de Express para nuestro servidor
const server = express();

// Habilitamos las peticiones desde el frontend
server.use(cors()); // Habilita CORS para evitar bloqueos en las peticiones del navegador
server.use(express.json()); // Permite recibir datos en formato JSON en las peticiones

// Definimos las constantes necesarias para la conexión con el servidor
const PORT = 3000; // Puerto donde correrá nuestro servidor

// Creamos un pool de conexiones, que hará que las conexiones se hagan bajo demanda según se vayan necesitando
const pool_mysql = mysql.createPool({
    host: "localhost", // Dirección del servidor
    port: 3306, // Puerto al que nos conectamos en MySQL
    user: "root", // Usuario al que nos conectamos
    password: "", // Contraseña del usuario al que nos conectamos
    database: "restaurante", // Nombre de la base de datos que nos conectamos
    waitForConnections: true, // Hace que las nuevas peticiones esperan en cola hasta que haya una conexión libre. Si vale false esas nuevas peticiones fallan
    connectionLimit: 10, // Define el máximo de conexiones simultáneas al servidor MySQL
    queueLimit: 0 // Define el límite de peticiones en espera. El valor 0 define una cola infinita
});

function iniciarServidor() {
   // Solo arrancamos el servidor cuando la BD está conectada
   pool_mysql.getConnection((error, connection) => {
        if (error) {
            console.error("Error conectando a MySQL:", error);
            process.exit(1); // Si falla la BD, cerramos el server
        }
        connection.release();
        // Iniciamos el servidor en el puerto especificado
        server.listen(PORT, () => {
            // Confirmación en la consola de que se ha lanzado el servidor OK
            console.log(`Conectado a MySQL. Servidor corriendo en http://localhost:${PORT}`);
        });
    });
}

iniciarServidor();

server.get("/usuarios", (req, res) => {
    const ciudad = req.query.ciudad;
    let valores = [];
    let sql = "SELECT * FROM usuario";

    // Compruebo si existe un parámetro para filtrar por ciudad
    if (ciudad) {
        sql += " WHERE ciudad = ?";
        valores.push(ciudad);
    }

    pool_mysql.query(sql, valores, (error, resultados) => {
        if (error) {
            console.error("Error en la consulta:", error);
            return res.status(500).json({ error });
        }

        res.json(resultados);
    });
}); 
