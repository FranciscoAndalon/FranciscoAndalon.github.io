import http from 'http'; // módulo de Node.js usado para crear servidores y gestionar peticiones HTTP.
import fs from 'fs'; // módulo para interactuar con el sistema de archivos, que deja leer y escribir archivos.

function darBienvenida(req, res) {
    // Esta función muestra una página HTML de bienvenida al proyecto.
    // El archivo bienvenida.html tiene los enlaces a las páginas de escuelas y donantes.
    fs.readFile('bienvenida.html', 'utf8', (error, data) => {
        if (error) {
            // El código 500 indica un error interno del servidor.
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Oh no!!!!');
            return;
        }
        // El código 200 indica que la petición fue exitosa.
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}

function getEscuelas(req, res) {
    // Esta función envía un JSON con los datos de las escuelas.
    // Se agregaron dos escuelas de ejemplo.
    const escuelas = [
        {
            "nombre": "Escuela Benito Juárez",
            "direccion": "Av. Principal 123, Guadalajara"
        },
        {
            "nombre": "Escuela Emiliano Zapata",
            "direccion": "Calle Secundaria 456, Zapopan"
        }
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // JSON.stringify convierte el objeto JavaScript en una cadena en formato JSON.
    // Esto es necesario para enviar los datos correctamente a través de HTTP.
    res.end(JSON.stringify(escuelas));
}

function mostrarEscuelas(req, res) {
    // Muestra la página escuelas.html, la cual tiene enlaces a Bienvenida y Donantes.
    fs.readFile('escuelas.html', 'utf8', (error, data) => {
        if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Oh no!!!!');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}

function mostrarDonantes(req, res) {
    // Muestra la página donantes.html, que tiene enlaces a Bienvenida y Escuelas.
    fs.readFile('donantes.html', 'utf8', (error, data) => {
        if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Oh no!!!!');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}

function getDonantes(req, res) {
    // Esta función envía un JSON con los datos de los donantes.
    const donantes = [
        {
            "nombre": "Donante Juan Pérez",
            "contribucion": 1000
        },
        {
            "nombre": "Donante María García",
            "contribucion": 500
        }
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(donantes));
}

function mostrarEquipo(req, res) {
    // Muestra la página equipo.html, la cual lista al equipo del proyecto.
    fs.readFile('equipo.html', 'utf8', (error, data) => {
        if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Oh no!!!!');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}

function mostrarOpinion(req, res) {
    // Muestra la página opinion.html, donde se responde al artículo sobre colonialismo digital.
    fs.readFile('opinion.html', 'utf8', (error, data) => {
        if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Oh no!!!!');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}

function manejarRuta404(req, res) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    // Mensaje para la ruta no encontrada.
    res.end('Página no encontrada.');
}

// La siguiente línea crea el servidor utilizando createServer.
// Documentación: https://nodejs.org/api/http.html#http_http_createserver_options_requestlistener
const servidor = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        darBienvenida(req, res);
    } else if (url === '/api/escuelas') {
        getEscuelas(req, res);
    } else if (url === '/api/donantes') {
        getDonantes(req, res);
    } else if (url === '/escuelas') {
        mostrarEscuelas(req, res);
    } else if (url === '/donantes') {
        mostrarDonantes(req, res);
    } else if (url === '/equipo') {
        mostrarEquipo(req, res);
    } else if (url === '/opinion') {
        mostrarOpinion(req, res);
    } else {
        manejarRuta404(req, res);
    }
});

const puerto = 1984;
servidor.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});