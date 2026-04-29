const PORT = 3000; // Puerto donde correrá nuestro servidor
const ENDPOINT_SERVER = "http://localhost"; // URL base de nuestro servidor
const ENDPOINT_OBTENER_POSTRE = "postres";
const ENDPOINT_INSERTAR_ELIMINAR_ACTUALIZAR_POSTRE = "postre";

document.addEventListener("DOMContentLoaded", () => {
    const botonmostrarpostre = document.getElementById("botonmostrarpostre"); // Botón para mostrar todos los postres
    const botoninsertarpostre = document.getElementById("botoninsertarpostre"); // Botón para insertar un nuevo postre
    const botoneliminarpostre = document.getElementById("botoneliminarpostre"); // Botón para eliminar un postre
    const botonactualizarpostre = document.getElementById("botonactualizarpostre"); // Botón para actualizar un postre
    const mensajesalidapostre = document.getElementById("mensajesalidapostre"); // Contenedor donde se mostrarán los resultados

    function mostrarPostre (postres) {
        mensajesalidapostre.innerHTML = ""; // Limpio el contenedor de resultados

        // Si no hay postres encontrados, muestro un mensaje
        if (postres.length === 0) {
            mensajesalidapostre.innerHTML = "<p>No se encontraron postres.</p>";
        } else {
            // Recorro la lista de postres y creo un div para cada uno
            postres.forEach(postres => {
                let div = document.createElement("div");
                div.classList.add("grid-item");
                div.innerHTML = `<p><strong><u>Nombre:</u></strong> <span>${postres.nombre}</span></p>
                    <p><strong><u>País de origen:</u></strong> <span>${postres.pais_origen}</span></p>
                    <p><strong><u>Precio:</u></strong> <span>${postres.precio}</span></p>
                    <p><strong><u>Con o sin azúcar:</u></strong> <span>${postres.con_o_sin_azucar}</span></p>`;
                mensajesalidapostre.appendChild(div); // Agrego el div al contenedor de salida
            });
        }
    }
    
    /*
    function consultarPostres (filtro = "todos", valor = "") {
        // Creo la URL del Endpoint del servidor para consultar usuarios
        const ENDPOINT_SERVER_PUERTO = new URL(ENDPOINT_SERVER);
        ENDPOINT_SERVER_PUERTO.port = PORT;
        
        const ENDPOINT_SERVER_POSTRES = new URL(ENDPOINT_OBTENER_POSTRES, ENDPOINT_SERVER_PUERTO);
        
        // Si se ha indicado un filtro, lo agrego a la URL con parámetros de consulta
        switch (filtro) {
            case "precio":
                ENDPOINT_SERVER_USUARIOS.searchParams.set('precio', valor); // Búsqueda por precio
                break;
        }
        
        //console.log(ENDPOINT_SERVER_USUARIOS.href);
        
        fetch(ENDPOINT_SERVER_USUARIOS)
            .then(respuesta_servidor => {
                if (!respuesta_servidor.ok) {
                    throw new Error("Error al obtener los usuarios.");
                }
                return respuesta_servidor.json();
            })

            .then(datos_usuarios => {
                mostrarUsuarios(datos_usuarios); // Muestro los usuarios en la página
            })

            .catch(error => {
                console.error("Error consultando usuarios:", error); // Muestro el error en la consola
                mensajesalida.innerHTML = `<p><b>Error</b>: ${error}</p>`; // Muestro mensaje de error en la interfaz
            });
    }
    */

    function insertarPostre(postre) {
        // Creo la URL del Endpoint del servidor para insertar un postre
        const ENDPOINT_SERVER_PUERTO = new URL(ENDPOINT_SERVER);
        ENDPOINT_SERVER_PUERTO.port = PORT;
        
        const ENDPOINT_SERVER_INSERTAR_POSTRES = new URL(ENDPOINT_INSERTAR_ELIMINAR_ACTUALIZAR_POSTRE,
        ENDPOINT_SERVER_PUERTO);
        
        //console.log(ENDPOINT_SERVER_INSERTAR_POSTRES.href);
        
        fetch(ENDPOINT_SERVER_INSERTAR_POSTRES, {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(postre)
        })
        then(respuesta_servidor => {
        if (!respuesta_servidor.ok) {
            throw new Error("Error al insertar el postre.");
        }
        return respuesta_servidor.json();
        })
        then(datos => {
            console.log(datos);
            alert(datos.mensaje);
        })
        .catch(error => {
            console.error("Error al insertar el postre:", error); // Muestro el error en la consola
            mensajesalidapostre.innerHTML = `<p><b>Error</b>: ${error}</p>`; // Muestro mensaje de error en la interfaz
        });
    }

     function eliminarPostre(postre) {
        // Creo la URL del Endpoint del servidor para eliminar el postre
        const ENDPOINT_SERVER_PUERTO = new URL(ENDPOINT_SERVER);
        ENDPOINT_SERVER_PUERTO.port = PORT;
        
        const ENDPOINT_SERVER_ELIMINAR_POSTRE = new URL(ENDPOINT_INSERTAR_ELIMINAR_ACTUALIZAR_POSTRE +
    `/${postre.nombre}`, ENDPOINT_SERVER_PUERTO);
        
        //console.log(ENDPOINT_SERVER_ELIMINAR_POSTRES.href);
        
        fetch(ENDPOINT_SERVER_ELIMINAR_POSTRES, {
            method: "DELETE"
        })
            .then(respuesta_servidor => {
                if (!respuesta_servidor.ok) {
                    throw new Error("Error al eliminar el postre.");
                }
                return respuesta_servidor.json();
            })
            .then(datos => {
                console.log(datos);
                alert(datos.mensaje);
            })
        
            .catch(error => {
                console.error("Error al eliminar el postre:", error); // Muestro el error en la consola
                mensajesalidapostre.innerHTML = `<p><b>Error</b>: ${error}</p>`; // Muestro mensaje de error
            });
    }

    function actualizarPostre(postre) {
        // Creo la URL del Endpoint del servidor para actualizar el postre
        const ENDPOINT_SERVER_PUERTO = new URL(ENDPOINT_SERVER);
        ENDPOINT_SERVER_PUERTO.port = PORT;
        
            const ENDPOINT_SERVER_ELIMINAR_POSTRE = new URL(ENDPOINT_INSERTAR_ELIMINAR_ACTUALIZAR_POSTRE +
    `/${postre.nombre}`, ENDPOINT_SERVER_PUERTO);
        
        //console.log(ENDPOINT_SERVER_ELIMINAR_POSTRE.href);
        
        fetch(ENDPOINT_SERVER_ELIMINAR_POSTRE, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postre)
        })
            .then(respuesta_servidor => {
                if (!respuesta_servidor.ok) {
                    throw new Error("Error al actualizar el postre.");
                }
                return respuesta_servidor.json();
            })
            .then(datos => {
                console.log(datos);
                alert(datos.mensaje);
            })
            .catch(error => {
                console.error("Error al actualizar el postre:", error); // Muestro el error en la consola
                mensajesalidapostre.innerHTML = `<p><b>Error</b>: ${error}</p>`; // Muestro mensaje de error en la interfaz
            });
    }
    

    //botones
    botonmostrarpostre.addEventListener("click", () => mostrarPostre());


    botoninsertarpostre.addEventListener("click", () => {
        // Inserto un objeto postre con datos inventados fijos
        const postre = {
            nombre: "00Prueba00",
            pais_origen: "00Prueba00",
            precio: "00Prueba00",
            con_o_sin_azucar: "00Prueba00"
        };

        insertarPostre(postre);
    });

    botoneliminarpostre.addEventListener("click", () => {
        // Elimino un objeto postre con datos inventados fijos
        const postre = {
            nombre: "00Prueba00",
            pais_origen: "00Prueba00",
            precio: "00Prueba00",
            con_o_sin_azucar: "00Prueba00"
        };

        eliminarPostre(postre);
    });

    botonactualizarpostre.addEventListener("click", () => {
        // Actualizo un objeto postre con datos inventados fijos
        const postre = {
            nombre: "00Prueba00",
            pais_origen: "00Prueba00",
            precio: "00Prueba00",
            con_o_sin_azucar: "00Prueba00"
        };

        actualizarPostre(postre);
    });
});