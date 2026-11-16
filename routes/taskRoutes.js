const express = require('express');

const router = express.Router();

const taskController = require('../controllers/taskController');

// Rutes per gestionar les tasques.
router.post('/', taskController.createTask);          // Crear una tasca
router.get('/', taskController.getTasks);             // Obtenir totes les tasques
router.get('/:id', taskController.getTaskById);       // Obtenir una tasca per ID
router.put('/:id', taskController.updateTask);        // Actualitzar una tasca
router.delete('/:id', taskController.deleteTask);     // Eliminar una tasca

module.exports = router;
