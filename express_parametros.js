const express = require('express');
const app = express();

const escuelas = [
    { id: 1, nombre: "Escuela Primaria Benito Juárez", nivel: "primaria" },
    { id: 2, nombre: "Escuela Secundaria Revolución", nivel: "secundaria" },
    { id: 3, nombre: "Preparatoria Nacional", nivel: "preparatoria" },
    { id: 4, nombre: "Escuela Primaria Miguel Hidalgo", nivel: "primaria" },
    { id: 5, nombre: "Escuela Secundaria Morelos", nivel: "secundaria" }
];

app.get('/getEscuelas/:nivel', (req, res) => {
    const { nivel } = req.params;
    const resultado = escuelas.filter(escuela => escuela.nivel === nivel.toLowerCase());

    if (resultado.length === 0) {
        return res.status(404).json({ mensaje: `No se encontraron escuelas de nivel ${nivel}` });
    }

    res.status(200).json(resultado);
});

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));