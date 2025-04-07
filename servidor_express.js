const express = require('express');
const fs = require('fs');

const app = express();
const puerto = 1984;

// La ruta raíz enseña la página de bienvenida.
// Lee el archivo de bienvenida.html y lo manda al cliente.
app.get('/', (req, res) => {
  fs.readFile('bienvenida.html', 'utf8', (error, data) => {
    if (error) {
      res.status(500).send('Oh no!!!!');
      return;
    }
    res.status(200).contentType('text/html').send(data);
  });
});

// Ruta para la API de escuelas.
// Manda un JSON con los datos de las escuelas.
// Se usa JSON.stringify internamente en res.json para pasar el objeto a cadena JSON.
app.get('/api/escuelas', (req, res) => {
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
  res.status(200).json(escuelas);
});

// Ruta para la API de donantes.
// Manda un JSON con los datos de los donantes.
app.get('/api/donantes', (req, res) => {
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
  res.status(200).json(donantes);
});

app.get('/escuelas', (req, res) => {
  fs.readFile('escuelas.html', 'utf8', (error, data) => {
    if (error) {
      res.status(500).send('Oh no!!!!');
      return;
    }
    res.status(200).contentType('text/html').send(data);
  });
});

app.get('/donantes', (req, res) => {
  fs.readFile('donantes.html', 'utf8', (error, data) => {
    if (error) {
      res.status(500).send('Oh no!!!!');
      return;
    }
    res.status(200).contentType('text/html').send(data);
  });
});

app.get('/equipo', (req, res) => {
  fs.readFile('equipo.html', 'utf8', (error, data) => {
    if (error) {
      res.status(500).send('Oh no!!!!');
      return;
    }
    res.status(200).contentType('text/html').send(data);
  });
});

app.get('/opinion', (req, res) => {
  fs.readFile('opinion.html', 'utf8', (error, data) => {
    if (error) {
      res.status(500).send('Oh no!!!!');
      return;
    }
    res.status(200).contentType('text/html').send(data);
  });
});

// Middleware para manejar rutas que no estén definidas (404).
app.use((req, res) => {
  res.status(404).send('Página no encontrada.');
});

app.listen(puerto, () => {
  console.log(`Servidor Express levantado en el puerto ${puerto}`);
});