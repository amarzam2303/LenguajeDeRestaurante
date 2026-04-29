const PORT = 3000; // Puerto donde correrá nuestro servidor
const ENDPOINT_SERVER = "http://localhost"; // URL base de nuestro servidor
const ENDPOINT_OBTENER_POSTRE = "postres";
const ENDPOINT_INSERTAR_ELIMINAR_ACTUALIZAR_POSTRE = "postre";

document.addEventListener("DOMContentLoaded", () => {
    const botonmostrarpostre = document.getElementById("botonmostrarpostre"); // Botón para mostrar todos los postres
    const botoninsertarpostre = document.getElementById("botoninsertarpostre"); // Botón para insertar un nuevo postre
    const botoneliminarpostre = document.getElementById("botoneliminarpostre"); // Botón para eliminar un postre
    const botonactualizarpostre = document.getElementById("botonactualizarpostre"); // Botón para actualizar un postre
    const mensajesalida = document.getElementById("mensajesalida"); // Contenedor donde se mostrarán los resultados

    function mostrarPostre (postres) {
        mensajesalida.innerHTML = ""; // Limpio el contenedor de resultados

        // Si no hay postres encontrados, muestro un mensaje
        if (postres.length === 0) {
            mensajesalida.innerHTML = "<p>No se encontraron postres.</p>";
        } else {
            // Recorro la lista de postres y creo un div para cada uno
            postres.forEach(postres => {
                let div = document.createElement("div");
                div.classList.add("grid-item");
                div.innerHTML = `<p><strong><u>Nombre:</u></strong> <span>${usuario.nombre}</span></p>
                    <p><strong><u>Email:</u></strong> <span>${usuario.email}</span></p>
                    <p><strong><u>Edad:</u></strong> <span>${usuario.edad}</span></p>
                    <p><strong><u>Ciudad:</u></strong> <span>${usuario.ciudad}</span></p>`;
                mensajesalida.appendChild(div); // Agrego el div al contenedor de salida
            });
        }
    }
    
});