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
    port: 3307, // Puerto al que nos conectamos en MySQL
    user: "root", // Usuario al que nos conectamos
    password: "", // Contraseña del usuario al que nos conectamos
    database: "restaurante", // Nombre de la base de datos que nos conectamos
    waitForConnections: true, // Hace que las nuevas peticiones esperan en cola hasta que haya una conexión libre. Si vale false esas nuevas peticiones fallan
    connectionLimit: 10, // Define el máximo de conexiones simultáneas al servidor MySQL
    queueLimit: 0 // Define el límite de peticiones en espera. El valor 0 define una cola infinita
});

server.get("/postres", (req, res) => {
    const sql = "SELECT * FROM Postre";

    pool_mysql.query(sql, (error, resultados) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(resultados);
    });
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

/* BUSCADOR 
server.get("/postre", (req, res) => {
    const precio = req.query.ciudad;
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
*/

//----------------------------------------------------------------------
// APARTADOS DE LOS POSTRES
//----------------------------------------------------------------------
server.post("/postre", (req, res) => {
    // Utilizamos la variable req que contiene toda la información que envía el cliente al servidor
    const { nombre, pais_origen, precio, con_o_sin_azucar } = req.body;

    const sql = `
        INSERT INTO Postre (nombre, pais_origen, precio, con_o_sin_azucar)
        VALUES (?, ?, ?, ?)
    `;

    pool_mysql.query(
        sql,
        [nombre, pais_origen, precio, con_o_sin_azucar],
        (error, resultado) => {
            if (error) {
                console.error("Error en INSERT:", error);
                return res.status(500).json({ error });
            }

            res.json({
                mensaje: "Postre insertado correctamente",
                datos: { nombre, pais_origen, precio, con_o_sin_azucar }
            });
        }
    );
});

server.put("/postre/:nombre", (req, res) => {
    // Utilizamos la variable req que contiene toda la información que envía el cliente al servidor
    const nombre = req.params.nombre;
    const { pais_origen, precio, con_o_sin_azucar } = req.body;

    const sql = `
        UPDATE Postre
        SET pais_origen = ?, precio = ?, con_o_sin_azucar = ?
        WHERE nombre = ?
    `;

    pool_mysql.query(
        sql,
        [ pais_origen, precio, con_o_sin_azucar, nombre ],
        (error, resultado) => {
            if (error) {
                console.error("Error en UPDATE:", error);
                return res.status(500).json({ error });
            }

            res.json({ mensaje: "Postre actualizado" });
        }
    );
});

server.delete("/postre/:nombre", (req, res) => {
    // Utilizamos la variable req que contiene toda la información que envía el cliente al servidor
    const nombre = req.params.nombre;

    const sql = "DELETE FROM Postre WHERE nombre = ?";

    pool_mysql.query(sql, [nombre], (error) => {
        if (error) {
            console.error("Error en DELETE:", error);
            return res.status(500).json({ error });
        }

        res.json({ mensaje: "Postre eliminado" });
    });
});


//----------------------------------------------------------------------
// APARTADOS DE LAS BEBIDAS
//----------------------------------------------------------------------
server.post("/bebida", (req, res) => {
    // Utilizamos la variable req que contiene toda la información que envía el cliente al servidor
    const { nombre, pais_origen, precio, temperatura, con_o_sin_hielo } = req.body;

    const sql = `
        INSERT INTO Bebida (nombre, pais_origen, precio, temperatura, con_o_sin_hielo)
        VALUES (?, ?, ?, ?, ?)
    `;

    pool_mysql.query(
        sql,
        [nombre, pais_origen, precio, temperatura, con_o_sin_hielo],
        (error, resultado) => {
            if (error) {
                console.error("Error en INSERT:", error);
                return res.status(500).json({ error });
            }

            res.json({
                mensaje: "Bebida insertada correctamente",
                datos: { nombre, pais_origen, precio, temperatura, con_o_sin_hielo }
            });
        }
    );
});

server.put("/bebida/:id", (req, res) => {
    // Utilizamos la variable req que contiene toda la información que envía el cliente al servidor
    const id = req.params.id;
    const { nombre, pais_origen, precio, temperatura, con_o_sin_hielo } = req.body;

    const sql = `
        UPDATE Bebida
        SET nombre = ?, pais_origen = ?, precio = ?, temperatura = ?, con_o_sin_hielo = ?
        WHERE id = ?
    `;

    pool_mysql.query(
        sql,
        [ nombre, pais_origen, precio, temperatura, con_o_sin_hielo ],
        (error, resultado) => {
            if (error) {
                console.error("Error en UPDATE:", error);
                return res.status(500).json({ error });
            }

            res.json({ mensaje: "Bebida actualizada" });
        }
    );
});

server.delete("/bebida/:id", (req, res) => {
    // Utilizamos la variable req que contiene toda la información que envía el cliente al servidor
    const id = req.params.id;

    const sql = "DELETE FROM Bebida WHERE id = ?";

    pool_mysql.query(sql, [id], (error) => {
        if (error) {
            console.error("Error en DELETE:", error);
            return res.status(500).json({ error });
        }

        res.json({ mensaje: "Bebida eliminada" });
    });
});


//----------------------------------------------------------------------
// APARTADOS DE LOS PLATOS PRINCIPALES
//----------------------------------------------------------------------
server.post("/plato", (req, res) => {
    // Utilizamos la variable req que contiene toda la información que envía el cliente al servidor
    const { nombre, pais_origen, precio } = req.body;

    const sql = `
        INSERT INTO Plato_principal (nombre, pais_origen, precio)
        VALUES (?, ?, ?)
    `;

    pool_mysql.query(
        sql,
        [nombre, pais_origen, precio],
        (error, resultado) => {
            if (error) {
                console.error("Error en INSERT:", error);
                return res.status(500).json({ error });
            }

            res.json({
                mensaje: "Plato principal insertado correctamente",
                datos: { nombre, pais_origen, precio }
            });
        }
    );
});

server.put("/plato/:nombre", (req, res) => {
    // Utilizamos la variable req que contiene toda la información que envía el cliente al servidor
    const nombre = req.params.nombre;
    const { pais_origen, precio } = req.body;

    const sql = `
        UPDATE Plato_principal
        SET pais_origen = ?, precio = ?
        WHERE nombre = ?
    `;

    pool_mysql.query(
        sql,
        [ pais_origen, precio, nombre ],
        (error, resultado) => {
            if (error) {
                console.error("Error en UPDATE:", error);
                return res.status(500).json({ error });
            }

            res.json({ mensaje: "Plato principal actualizado" });
        }
    );
});

server.delete("/plato/:nombre", (req, res) => {
    // Utilizamos la variable req que contiene toda la información que envía el cliente al servidor
    const nombre = req.params.nombre;

    const sql = "DELETE FROM Plato_principal WHERE nombre = ?";

    pool_mysql.query(sql, [nombre], (error) => {
        if (error) {
            console.error("Error en DELETE:", error);
            return res.status(500).json({ error });
        }

        res.json({ mensaje: "Plato principal eliminado" });
    });
});
