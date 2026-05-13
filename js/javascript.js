const PORT = 3000;                          // Puerto donde correrá nuestro servidor
const ENDPOINT_SERVER = "http://localhost"; // URL base de nuestro servidor

//--------------------------------------------------------------------------
//ENDPOINT DE LOS POSTRES
//----------------------------------------------------------------------
const ENDPOINT_OBTENER_POSTRE = "postres";
const ENDPOINT_INSERTAR_ELIMINAR_ACTUALIZAR_POSTRE = "postre";

//--------------------------------------------------------------------------
//ENDPOINT DE LAS BEBIDAS
//----------------------------------------------------------------------
const ENDPOINT_OBTENER_BEBIDA = "bebidas";
const ENDPOINT_INSERTAR_ELIMINAR_ACTUALIZAR_BEBIDA = "bebida";

//--------------------------------------------------------------------------
//ENDPOINT DE LOS PLATOS PRINCIPALES
//----------------------------------------------------------------------
const ENDPOINT_OBTENER_PLATO = "platos";
const ENDPOINT_INSERTAR_ELIMINAR_ACTUALIZAR_PLATO = "plato";

//--------------------------------------------------------------------------
//ENDPOINT DE LOS INGREDIENTES
//----------------------------------------------------------------------
const ENDPOINT_OBTENER_INGREDIENTE = "ingredientes";
const ENDPOINT_INSERTAR_ELIMINAR_ACTUALIZAR_INGREDIENTE = "ingrediente";

document.addEventListener("DOMContentLoaded", () => {
    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    //CONSTANTES DE LOS POSTRES
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    const botonmostrarpostre = document.getElementById("botonmostrarpostre"); // Botón para mostrar todos los postres
    const botoninsertarpostre = document.getElementById("botoninsertarpostre"); // Botón para insertar un nuevo postre
    const botoneliminarpostre = document.getElementById("botoneliminarpostre"); // Botón para eliminar un postre
    const botonactualizarpostre = document.getElementById("botonactualizarpostre"); // Botón para actualizar un postre
    const mensajesalidapostre = document.getElementById("mensajesalidapostre"); // Contenedor donde se mostrarán los resultados

    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    //CONSTANTES DE LAS BEBIDAS
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    const botonmostrarbebida = document.getElementById("botonmostrarbebida"); // Botón para mostrar todos las bebidas
    const botoninsertarbebida = document.getElementById("botoninsertarbebida"); // Botón para insertar un nuevo bebida
    const botoneliminarbebida = document.getElementById("botoneliminarbebida"); // Botón para eliminar un bebida
    const botonactualizarbebida = document.getElementById("botonactualizarbebida"); // Botón para actualizar un bebida
    const mensajesalidabebida = document.getElementById("mensajesalidabebida"); // Contenedor donde se mostrarán los resultados

    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    //CONSTANTES DE LOS PLATOS PRINCIPALES
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    const botonmostrarplato = document.getElementById("botonmostrarplato"); // Botón para mostrar todos las platos
    const botoninsertarplato = document.getElementById("botoninsertarplato"); // Botón para insertar un nuevo plato
    const botoneliminarplato = document.getElementById("botoneliminarplato"); // Botón para eliminar un plato
    const botonactualizarplato = document.getElementById("botonactualizarplato"); // Botón para actualizar un plato
    const mensajesalidaplato = document.getElementById("mensajesalidaplato"); // Contenedor donde se mostrarán los resultados

    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    //CONSTANTES DE LOS INGREDIENTES
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    const botonmostraringrediente = document.getElementById("botonmostraringrediente"); // Botón para mostrar todos los ingredientes
    const botoninsertaringrediente = document.getElementById("botoninsertaringrediente"); // Botón para insertar un nuevo ingrediente
    const botoneliminaringrediente = document.getElementById("botoneliminaringrediente"); // Botón para eliminar un ingrediente
    const botonactualizaringrediente = document.getElementById("botonactualizaringrediente"); // Botón para actualizar un ingrediente
    const mensajesalidaingrediente = document.getElementById("mensajesalidaingrediente"); // Contenedor donde se mostrarán los resultados


    //CONSTANTES DE LA PÁGINA DE CREAR TU MENÚ FAVORITO
    const formulario = document.getElementById("formulario");
    const nuevomenucreado = document.getElementById("nuevomenucreado");


    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    //FUNCIONES DE LOS POSTRES
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    function mostrarPostre (postres) {
        mensajesalidapostre.innerHTML = ""; // Limpio el contenedor de resultados

        // Si no hay postres encontrados, muestro un mensaje
        if (postres.length === 0) {
            mensajesalidapostre.innerHTML = "<p>No se encontraron postres.</p>";
        } else {
            // Recorro la lista de postres y creo un div para cada uno
            postres.forEach(postre => {
                let div = document.createElement("div");
                div.classList.add("grid-item");
                div.innerHTML = `
                    <p><strong><u>Nombre:</u></strong> <span>${postre.nombre}</span></p>
                    <p><strong><u>País de origen:</u></strong> <span>${postre.pais_origen}</span></p>
                    <p><strong><u>Precio:</u></strong> <span>${postre.precio}</span></p>
                    <p><strong><u>Con o sin azúcar:</u></strong> <span>${postre.con_o_sin_azucar}</span></p>
                `;

                mensajesalidapostre.appendChild(div); // Agrego el div al contenedor de salida
            });
        }
    }
    
    /*  Próximamente en la tercera entrega el consultarlos

    function consultarUsuarios (filtro = "todos", valor = "") {
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
        .then(respuesta_servidor => {
            if (!respuesta_servidor.ok) {
                throw new Error("Error al insertar el postre.");
            }
                return respuesta_servidor.json();
        })
        .then(datos => {
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
        
        const ENDPOINT_SERVER_ELIMINAR_POSTRE = new URL(ENDPOINT_INSERTAR_ELIMINAR_ACTUALIZAR_POSTRE + `/${encodeURIComponent(postre.nombre)}`,
        ENDPOINT_SERVER_PUERTO);
        
        //console.log(ENDPOINT_SERVER_ELIMINAR_POSTRES.href);
        
        fetch(ENDPOINT_SERVER_ELIMINAR_POSTRE, {
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
        
        const ENDPOINT_SERVER_ELIMINAR_POSTRE = new URL(ENDPOINT_INSERTAR_ELIMINAR_ACTUALIZAR_POSTRE + `/${encodeURIComponent(postre.nombre)}`,
         ENDPOINT_SERVER_PUERTO);
        
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
    botonmostrarpostre.addEventListener("click", () => {
    fetch(`${ENDPOINT_SERVER}:${PORT}/${ENDPOINT_OBTENER_POSTRE}`)
        .then(res => res.json())
        .then(data => mostrarPostre(data))
        .catch(err => console.error(err));
    });


    botoninsertarpostre.addEventListener("click", () => {
        // Inserto un objeto postre con datos inventados fijos
        const postre = {
            nombre: "Macarons",
            pais_origen: "Francia",
            precio: 2.5,
            con_o_sin_azucar: "Con azúcar"
        };

        insertarPostre(postre);
    });

    botoneliminarpostre.addEventListener("click", () => {
        // Elimino un objeto postre con datos inventados fijos
        const postre = {
            nombre: "Macarons",
            pais_origen: "Francia",
            precio: 2.5,
            con_o_sin_azucar: "Con azúcar"
        };

        eliminarPostre(postre);
    });

    botonactualizarpostre.addEventListener("click", () => {
        // Actualizo un objeto postre con datos inventados fijos
        const postre = {
            nombre: "Macarons",
            pais_origen: "Francia",
            precio: 9.0,
            con_o_sin_azucar: "Con azúcar"
        };

        actualizarPostre(postre);
    });


    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    //FUNCIONES DE LAS BEBIDAS
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    function mostrarBebida (bebidas) {
        mensajesalidabebida.innerHTML = ""; // Limpio el contenedor de resultados

        // Si no hay postres encontrados, muestro un mensaje
        if (bebidas.length === 0) {
            mensajesalidabebida.innerHTML = "<p>No se encontraron bebidas.</p>";
        } else {
            // Recorro la lista de postres y creo un div para cada uno
            bebidas.forEach(bebida => {
                let div = document.createElement("div");
                div.classList.add("grid-item");
                div.innerHTML = `
                    <p><strong><u>Nombre:</u></strong> <span>${bebida.nombre}</span></p>
                    <p><strong><u>País de origen:</u></strong> <span>${bebida.pais_origen}</span></p>
                    <p><strong><u>Precio:</u></strong> <span>${bebida.precio}</span></p>
                    <p><strong><u>Temperatura:</u></strong> <span>${bebida.temperatura}</span></p>
                    <p><strong><u>Con o sin hielo:</u></strong> <span>${bebida.con_o_sin_hielo}</span></p>
                `;

                mensajesalidabebida.appendChild(div); // Agrego el div al contenedor de salida
            });
        }
    }
 
    function insertarBebida (bebida) {
        // Creo la URL del Endpoint del servidor para insertar una bebida
        const ENDPOINT_SERVER_PUERTO = new URL(ENDPOINT_SERVER);
        ENDPOINT_SERVER_PUERTO.port = PORT;
        
        const ENDPOINT_SERVER_INSERTAR_BEBIDAS = new URL(ENDPOINT_INSERTAR_ELIMINAR_ACTUALIZAR_BEBIDA,
        ENDPOINT_SERVER_PUERTO);
        
        //console.log(ENDPOINT_SERVER_INSERTAR_BEBIDAS.href);
        
        fetch(ENDPOINT_SERVER_INSERTAR_BEBIDAS, {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(bebida)
        })
        .then(respuesta_servidor => {
        if (!respuesta_servidor.ok) {
            throw new Error("Error al insertar la bebida.");
        }
        return respuesta_servidor.json();
        })
        .then(datos => {
            console.log(datos);
            alert(datos.mensaje);
        })
        .catch(error => {
            console.error("Error al insertar la bebida:", error); // Muestro el error en la consola
            mensajesalidabebida.innerHTML = `<p><b>Error</b>: ${error}</p>`; // Muestro mensaje de error en la interfaz
        });
    }

     function eliminarBebida (bebida) {
        // Creo la URL del Endpoint del servidor para eliminar la bebida
        const ENDPOINT_SERVER_PUERTO = new URL(ENDPOINT_SERVER);
        ENDPOINT_SERVER_PUERTO.port = PORT;
        
        const ENDPOINT_SERVER_ELIMINAR_BEBIDA = new URL(ENDPOINT_INSERTAR_ELIMINAR_ACTUALIZAR_BEBIDA + `/${encodeURIComponent(bebida.nombre)}`,
        ENDPOINT_SERVER_PUERTO);
        
        //console.log(ENDPOINT_SERVER_ELIMINAR_BEBIDAS.href);
        
        fetch(ENDPOINT_SERVER_ELIMINAR_BEBIDA, {
            method: "DELETE"
        })
            .then(respuesta_servidor => {
                if (!respuesta_servidor.ok) {
                    throw new Error("Error al eliminar la bebida.");
                }
                return respuesta_servidor.json();
            })
            .then(datos => {
                console.log(datos);
                alert(datos.mensaje);
            })
        
            .catch(error => {
                console.error("Error al eliminar la bebida:", error); // Muestro el error en la consola
                mensajesalidabebida.innerHTML = `<p><b>Error</b>: ${error}</p>`; // Muestro mensaje de error
            });
    }

    function actualizarBebida(bebida) {
        // Creo la URL del Endpoint del servidor para actualizar la bebida
        const ENDPOINT_SERVER_PUERTO = new URL(ENDPOINT_SERVER);
        ENDPOINT_SERVER_PUERTO.port = PORT;
        
        const ENDPOINT_SERVER_ELIMINAR_BEBIDA = new URL(ENDPOINT_INSERTAR_ELIMINAR_ACTUALIZAR_BEBIDA + `/${encodeURIComponent(bebida.nombre)}`,
         ENDPOINT_SERVER_PUERTO);
        
        //console.log(ENDPOINT_SERVER_ELIMINAR_BEBIDA.href);
        
        fetch(ENDPOINT_SERVER_ELIMINAR_BEBIDA, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bebida)
        })
            .then(respuesta_servidor => {
                if (!respuesta_servidor.ok) {
                    throw new Error("Error al actualizar la bebida.");
                }
                return respuesta_servidor.json();
            })
            .then(datos => {
                console.log(datos);
                alert(datos.mensaje);
            })
            .catch(error => {
                console.error("Error al actualizar la bebida:", error); // Muestro el error en la consola
                mensajesalidabebida.innerHTML = `<p><b>Error</b>: ${error}</p>`; // Muestro mensaje de error en la interfaz
            });
    }
    

    //botones
    botonmostrarbebida.addEventListener("click", () => {
    fetch(`${ENDPOINT_SERVER}:${PORT}/${ENDPOINT_OBTENER_BEBIDA}`)
        .then(res => res.json())
        .then(data => mostrarBebida(data))
        .catch(err => console.error(err));
    });


    botoninsertarbebida.addEventListener("click", () => {
        // Inserto un objeto postre con datos inventados fijos
        const bebida = {
            nombre: "Cola-cao",
            pais_origen: "España",
            precio: 2.0,
            temperatura: "Caliente",
            con_o_sin_hielo: "Sin hielo"
        };

        insertarBebida(bebida);
    });

    botoneliminarbebida.addEventListener("click", () => {
        // Elimino un objeto bebida con datos inventados fijos
        const bebida = {
            nombre: "Cola-cao",
            pais_origen: "España",
            precio: 2.0,
            temperatura: "Caliente",
            con_o_sin_hielo: "Sin hielo"
        };

        eliminarBebida(bebida);
    });

    botonactualizarbebida.addEventListener("click", () => {
        // Actualizo un objeto postre con datos inventados fijos
        const bebida = {
            nombre: "Cola-cao",
            pais_origen: "España",
            precio: 2.5,
            temperatura: "Caliente",
            con_o_sin_hielo: "Sin hielo"
        };

        actualizarBebida(bebida);
    });


    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    //FUNCIONES DE LOS PLATOS PRINCIPALES
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    function mostrarPlato (platos) {
        mensajesalidaplato.innerHTML = ""; // Limpio el contenedor de resultados

        // Si no hay postres encontrados, muestro un mensaje
        if (platos.length === 0) {
            mensajesalidaplato.innerHTML = "<p>No se encontraron platos.</p>";
        } else {
            // Recorro la lista de platos principales y creo un div para cada uno
            platos.forEach(plato => {
                let div = document.createElement("div");
                div.classList.add("grid-item");
                div.innerHTML = `
                    <p><strong><u>Nombre:</u></strong> <span>${plato.nombre}</span></p>
                    <p><strong><u>País de origen:</u></strong> <span>${plato.pais_origen}</span></p>
                    <p><strong><u>Precio:</u></strong> <span>${plato.precio}</span></p>
                    `;

                mensajesalidaplato.appendChild(div); // Agrego el div al contenedor de salida
            });
        }
    }
    

    function insertarPlato (plato) {
        // Creo la URL del Endpoint del servidor para insertar un plato principal
        const ENDPOINT_SERVER_PUERTO = new URL(ENDPOINT_SERVER);
        ENDPOINT_SERVER_PUERTO.port = PORT;
        
        const ENDPOINT_SERVER_INSERTAR_PLATOS = new URL(ENDPOINT_INSERTAR_ELIMINAR_ACTUALIZAR_PLATO,
        ENDPOINT_SERVER_PUERTO);
        
        //console.log(ENDPOINT_SERVER_INSERTAR_PLATOS.href);
        
        fetch(ENDPOINT_SERVER_INSERTAR_PLATOS, {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(plato)
        })
        .then(respuesta_servidor => {
        if (!respuesta_servidor.ok) {
            throw new Error("Error al insertar el plato principal.");
        }
        return respuesta_servidor.json();
        })
        .then(datos => {
            console.log(datos);
            alert(datos.mensaje);
        })
        .catch(error => {
            console.error("Error al insertar el plato principal:", error); // Muestro el error en la consola
            mensajesalidaplato.innerHTML = `<p><b>Error</b>: ${error}</p>`; // Muestro mensaje de error en la interfaz
        });
    }

     function eliminarPlato (plato) {
        // Creo la URL del Endpoint del servidor para eliminar el plato principal
        const ENDPOINT_SERVER_PUERTO = new URL(ENDPOINT_SERVER);
        ENDPOINT_SERVER_PUERTO.port = PORT;
        
        const ENDPOINT_SERVER_ELIMINAR_PLATO = new URL(ENDPOINT_INSERTAR_ELIMINAR_ACTUALIZAR_PLATO + `/${encodeURIComponent(plato.nombre)}`,
        ENDPOINT_SERVER_PUERTO);
        
        //console.log(ENDPOINT_SERVER_ELIMINAR_PLATOS.href);
        
        fetch(ENDPOINT_SERVER_ELIMINAR_PLATO, {
            method: "DELETE"
        })
            .then(respuesta_servidor => {
                if (!respuesta_servidor.ok) {
                    throw new Error("Error al eliminar el plato principal.");
                }
                return respuesta_servidor.json();
            })
            .then(datos => {
                console.log(datos);
                alert(datos.mensaje);
            })
        
            .catch(error => {
                console.error("Error al eliminar el plato principal:", error); // Muestro el error en la consola
                mensajesalidaplato.innerHTML = `<p><b>Error</b>: ${error}</p>`; // Muestro mensaje de error
            });
    }

    function actualizarPlato (plato) {
        // Creo la URL del Endpoint del servidor para actualizar el plato principal
        const ENDPOINT_SERVER_PUERTO = new URL(ENDPOINT_SERVER);
        ENDPOINT_SERVER_PUERTO.port = PORT;
        
        const ENDPOINT_SERVER_ELIMINAR_PLATO = new URL(ENDPOINT_INSERTAR_ELIMINAR_ACTUALIZAR_PLATO + `/${encodeURIComponent(plato.nombre)}`,
         ENDPOINT_SERVER_PUERTO);
        
        //console.log(ENDPOINT_SERVER_ELIMINAR_PLATO.href);
        
        fetch(ENDPOINT_SERVER_ELIMINAR_PLATO, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plato)
        })
            .then(respuesta_servidor => {
                if (!respuesta_servidor.ok) {
                    throw new Error("Error al actualizar el plato principal.");
                }
                return respuesta_servidor.json();
            })
            .then(datos => {
                console.log(datos);
                alert(datos.mensaje);
            })
            .catch(error => {
                console.error("Error al actualizar el plato principal:", error); // Muestro el error en la consola
                mensajesalidaplato.innerHTML = `<p><b>Error</b>: ${error}</p>`; // Muestro mensaje de error en la interfaz
            });
    }
    

    //botones
    botonmostrarplato.addEventListener("click", () => {
    fetch(`${ENDPOINT_SERVER}:${PORT}/${ENDPOINT_OBTENER_PLATO}`)
        .then(res => res.json())
        .then(data => mostrarPlato(data))
        .catch(err => console.error(err));
    });


    botoninsertarplato.addEventListener("click", () => {
        // Inserto un objeto postre con datos inventados fijos
        const plato = {
            nombre: "Nuggets de Pollo",
            pais_origen: "Estados unidos",
            precio: 5.9
        };

        insertarPlato(plato);
    });

    botoneliminarplato.addEventListener("click", () => {
        // Elimino un objeto postre con datos inventados fijos
        const plato = {
            nombre: "Nuggets de Pollo",
            pais_origen: "Estados unidos",
            precio: 5.9
        };

        eliminarPlato(plato);
    });

    botonactualizarplato.addEventListener("click", () => {
        // Actualizo un objeto postre con datos inventados fijos
        const plato = {
            nombre: "Nuggets de Pollo",
            pais_origen: "Estados unidos",
            precio: 9.0
        };

        actualizarPlato(plato);
    });



    //Página sobre los ingredientes
    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    //FUNCIONES DE LOS INGREDIENTES
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 
    function mostrarPlato (platos) {
        mensajesalidaplato.innerHTML = ""; // Limpio el contenedor de resultados

        // Si no hay postres encontrados, muestro un mensaje
        if (platos.length === 0) {
            mensajesalidaplato.innerHTML = "<p>No se encontraron platos.</p>";
        } else {
            // Recorro la lista de platos principales y creo un div para cada uno
            platos.forEach(plato => {
                let div = document.createElement("div");
                div.classList.add("grid-item");
                div.innerHTML = `
                    <p><strong><u>Nombre:</u></strong> <span>${plato.nombre}</span></p>
                    <p><strong><u>País de origen:</u></strong> <span>${plato.pais_origen}</span></p>
                    <p><strong><u>Precio:</u></strong> <span>${plato.precio}</span></p>
                    `;

                mensajesalidaplato.appendChild(div); // Agrego el div al contenedor de salida
            });
        }
    }
    

    function insertarIngrediente (ingrediente) {
        // Creo la URL del Endpoint del servidor para insertar un ingrediente
        const ENDPOINT_SERVER_PUERTO = new URL(ENDPOINT_SERVER);
        ENDPOINT_SERVER_PUERTO.port = PORT;
        
        const ENDPOINT_SERVER_INSERTAR_INGREDIENTES = new URL(ENDPOINT_INSERTAR_ELIMINAR_ACTUALIZAR_INGREDIENTE,
        ENDPOINT_SERVER_PUERTO);
        
        //console.log(ENDPOINT_SERVER_INSERTAR_INGREDIENTES.href);
        
        fetch(ENDPOINT_SERVER_INSERTAR_INGREDIENTES, {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(ingrediente)
        })
        .then(respuesta_servidor => {
        if (!respuesta_servidor.ok) {
            throw new Error("Error al insertar el ingrediente.");
        }
        return respuesta_servidor.json();
        })
        .then(datos => {
            console.log(datos);
            alert(datos.mensaje);
        })
        .catch(error => {
            console.error("Error al insertar el ingrediente:", error); // Muestro el error en la consola
            mensajesalidaingrediente.innerHTML = `<p><b>Error</b>: ${error}</p>`; // Muestro mensaje de error en la interfaz
        });
    }

     function eliminarIngrediente (ingrediente) {
        // Creo la URL del Endpoint del servidor para eliminar el ingrediente
        const ENDPOINT_SERVER_PUERTO = new URL(ENDPOINT_SERVER);
        ENDPOINT_SERVER_PUERTO.port = PORT;
        
        const ENDPOINT_SERVER_ELIMINAR_INGREDIENTE = new URL(ENDPOINT_INSERTAR_ELIMINAR_ACTUALIZAR_INGREDIENTE + `/${encodeURIComponent(ingrediente.id)}`,
        ENDPOINT_SERVER_PUERTO);
        
        //console.log(ENDPOINT_SERVER_ELIMINAR_INGREDIENTES.href);
        
        fetch(ENDPOINT_SERVER_ELIMINAR_INGREDIENTE, {
            method: "DELETE"
        })
            .then(respuesta_servidor => {
                if (!respuesta_servidor.ok) {
                    throw new Error("Error al eliminar el ingrediente.");
                }
                return respuesta_servidor.json();
            })
            .then(datos => {
                console.log(datos);
                alert(datos.mensaje);
            })
        
            .catch(error => {
                console.error("Error al eliminar el ingrediente:", error); // Muestro el error en la consola
                mensajesalidaingrediente.innerHTML = `<p><b>Error</b>: ${error}</p>`; // Muestro mensaje de error
            });
    }

    function actualizarIngrediente (ingrediente) {
        // Creo la URL del Endpoint del servidor para actualizar el ingrediente
        const ENDPOINT_SERVER_PUERTO = new URL(ENDPOINT_SERVER);
        ENDPOINT_SERVER_PUERTO.port = PORT;
        
        const ENDPOINT_SERVER_ELIMINAR_INGREDIENTE = new URL(ENDPOINT_INSERTAR_ELIMINAR_ACTUALIZAR_INGREDIENTE + `/${encodeURIComponent(ingrediente.id)}`,
         ENDPOINT_SERVER_PUERTO);
        
        //console.log(ENDPOINT_SERVER_ELIMINAR_INGREDIENTE.href);
        
        fetch(ENDPOINT_SERVER_ELIMINAR_INGREDIENTE, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ingrediente)
        })
            .then(respuesta_servidor => {
                if (!respuesta_servidor.ok) {
                    throw new Error("Error al actualizar el ingrediente.");
                }
                return respuesta_servidor.json();
            })
            .then(datos => {
                console.log(datos);
                alert(datos.mensaje);
            })
            .catch(error => {
                console.error("Error al actualizar el ingrediente:", error); // Muestro el error en la consola
                mensajesalidaingrediente.innerHTML = `<p><b>Error</b>: ${error}</p>`; // Muestro mensaje de error en la interfaz
            });
    }
    

    //botones
    botonmostraringrediente.addEventListener("click", () => {
    fetch(`${ENDPOINT_SERVER}:${PORT}/${ENDPOINT_OBTENER_INGREDIENTE}`)
        .then(res => res.json())
        .then(data => mostrarIngrediente(data))
        .catch(err => console.error(err));
    });


    botoninsertaringrediente.addEventListener("click", () => {
        // Inserto un objeto ingrediente con datos inventados fijos
        const ingrediente = {
            id: 33,
            nombre: "Garbanzos",
            tipo: "Carbohidratos"
        };

        insertarIngrediente(ingrediente);
    });

    botoneliminaringrediente.addEventListener("click", () => {
        // Elimino un objeto ingrediente con datos inventados fijos
        const ingrediente = {
            id: 33,
            nombre: "Garbanzos",
            tipo: "Carbohidratos"
        };

        eliminarIngrediente(ingrediente);
    });

    botonactualizaringrediente.addEventListener("click", () => {
        // Actualizo un objeto ingrediente con datos inventados fijos
        const ingrediente = {
            id: 12,
            nombre: "Garbanzos",
            tipo: "Carbohidratos"
        };

        actualizarIngrediente(ingrediente);
    });



    //-------- PÁGINA DE CREAR TU MENÚ FAVORITO --------
    //--------------------------------------------------

    //Mostrar contenido del contenedor del formulario mandado
    if (formulario) {
        formulario.addEventListener("submit", (event) => {

            // Evita recargar la página
            event.preventDefault();

            //Obtener el contenido escrito en el formulario
            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;
            const bebida = document.getElementById("bebida-fav").value;
            const plato = document.getElementById("plato-fav").value;
            const postre = document.getElementById("postre-fav").value;

            //Plasmarlo en el div de abajo del formulario

            //para crear cada menú escrito, debemos de crear un nnuevo div
            const nuevoMenu = document.createElement("div");

            nuevoMenu.innerHTML = `
                <h3>Nuevo menú creado</h3>
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Bebida:</strong> ${bebida}</p>
                <p><strong>Plato:</strong> ${plato}</p>
                <p><strong>Postre:</strong> ${postre}</p>
                <hr>
            `;

            // Añadir debajo
            nuevomenucreado.appendChild(nuevoMenu);
        });
    }

});