// JavaScript (en el archivo 'foro.js' o donde tengas tu script)
document.addEventListener('DOMContentLoaded', function () {
    const formularioComentario = document.getElementById('formularioComentario');
    const listaComentarios = document.getElementById('listaComentarios');
    const fotoPerfil = document.getElementById('fotoPerfil').src; // Obtener la URL de la foto de perfil

    formularioComentario.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe por defecto

        const contenidoComentario = document.getElementById('contenidoComentario').value.trim();
        if (contenidoComentario !== '') {
            const nuevoComentario = document.createElement('div');
            nuevoComentario.classList.add('comentario');
            nuevoComentario.innerHTML = `
                <img src="${fotoPerfil}" alt="Foto de perfil">
                <p>${contenidoComentario}</p>
                <hr class="linea">
            `;

            listaComentarios.appendChild(nuevoComentario);
            document.getElementById('contenidoComentario').value = ''; // Limpiar el textarea después de enviar el comentario
        }
    });
});


