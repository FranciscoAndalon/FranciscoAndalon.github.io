const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Ruta que consume el API, procesa la info y se la regresa al cliente
app.get('/users', async (req, res) => {
  try {
    // Se consume el API de JSONPlaceholder para obtener los usuarios
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = response.data;

    // Se extraen solamente los nombres de usuario
    const userNames = users.map(user => user.name);

    // Mandar los nombres al cliente en JSON
    res.json({ userNames });
  } catch (error) {
    console.error('Error al consumir el API:', error);
    res.status(500).send('Error al obtener los datos');
  }
});

app.get('/', (req, res) => {
  res.send('El servidor está activo. Ve a /users para ver los nombres de usuario.');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});