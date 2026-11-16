const express = require('express');
const cors = require('cors');

const app = express();

// Middleware de l'aplicació.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta inicial per comprovar que el servidor funciona.
app.get('/', (req, res) => {
    res.json({ message: 'Gestor de tasques en funcionament!' });
});

// Importem i activem les rutes de les tasques.
const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tasks', taskRoutes);

// Resposta per a rutes que no existeixen.
app.use((req, res) => {
    res.status(404).json({ message: 'Ruta no trobada' });
});

module.exports = app;
