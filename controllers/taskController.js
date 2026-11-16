const mongoose = require('mongoose');
const Task = require('../models/Task'); // Importem el model

// Crear una nova tasca.
exports.createTask = (req, res) => {
    const taskData = req.body || {};

    // La data de finalització es genera automàticament al servidor.
    if (taskData.completed === true) {
        taskData.finished_at = new Date();
    } else {
        taskData.finished_at = null;
    }

    const task = new Task(taskData); // Crear la tasca amb les dades del cos de la petició

    task.save() // Guardar la tasca a la base de dades
        .then(savedTask => {
            res.status(201).json(savedTask); // Retornar la tasca creada
        })
        .catch(err => {
            res.status(400).json({
                error: 'No s’ha pogut crear la tasca',
                details: err.message
            });
        });
};

// Obtenir totes les tasques.
exports.getTasks = (req, res) => {
    Task.find() // Obtenir totes les tasques de la base de dades
        .then(tasks => {
            res.status(200).json(tasks); // Retornar les tasques
        })
        .catch(err => {
            res.status(500).json({
                error: 'Error obtenint les tasques',
                details: err.message
            });
        });
};

// Obtenir una tasca pel seu ID.
exports.getTaskById = (req, res) => {
    Task.findById(req.params.id) // Buscar la tasca per ID
        .then(task => {
            if (!task) {
                return res.status(404).json({ message: 'Tasca no trobada' });
            }

            res.status(200).json(task); // Retornar la tasca trobada
        })
        .catch(err => {
            const status = err.name === 'CastError' ? 400 : 500;
            res.status(status).json({
                error: 'Error obtenint la tasca',
                details: err.message
            });
        });
};

// Actualitzar una tasca.
exports.updateTask = (req, res) => {
    const updates = { ...(req.body || {}) };

    // Aquests camps els gestiona el servidor i no es poden modificar directament.
    delete updates._id;
    delete updates.createdAt;
    delete updates.__v;
    delete updates.finished_at;

    // Si s'actualitza completed, també actualitzem finished_at.
    if (Object.prototype.hasOwnProperty.call(updates, 'completed')) {
        if (updates.completed === true) {
            updates.finished_at = new Date();
        } else if (updates.completed === false) {
            updates.finished_at = null;
        }
    }

    Task.findByIdAndUpdate(
        req.params.id,
        updates,
        { new: true, runValidators: true }
    )
        .then(updatedTask => {
            if (!updatedTask) {
                return res.status(404).json({ message: 'Tasca no trobada' });
            }

            res.status(200).json(updatedTask); // Retornar la tasca actualitzada
        })
        .catch(err => {
            res.status(400).json({
                error: 'Error actualitzant la tasca',
                details: err.message
            });
        });
};

// Eliminar una tasca.
exports.deleteTask = (req, res) => {
    Task.findByIdAndDelete(req.params.id) // Eliminar la tasca
        .then(deletedTask => {
            if (!deletedTask) {
                return res.status(404).json({ message: 'Tasca no trobada' });
            }

            res.status(200).json({
                message: 'Tasca eliminada amb èxit',
                task: deletedTask
            });
        })
        .catch(err => {
            const status = err.name === 'CastError' ? 400 : 500;
            res.status(status).json({
                error: 'Error eliminant la tasca',
                details: err.message
            });
        });
};
