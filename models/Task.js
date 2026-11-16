const mongoose = require('mongoose');

// Definim l'esquema de les tasques.
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'El títol de la tasca és obligatori'],
        trim: true
    },
    description: {
        type: String,
        trim: true,
        default: ''
    },
    cost: {
        type: Number,
        required: [true, 'El cost és obligatori'],
        min: [0, 'El cost no pot ser negatiu']
    },
    hours_estimated: {
        type: Number,
        required: [true, 'La previsió d’hores és obligatòria'],
        min: [0, 'Les hores estimades no poden ser negatives']
    },
    hours_real: {
        type: Number,
        min: [0, 'Les hores reals no poden ser negatives'],
        default: null
    },
    image: {
        type: String,
        trim: true,
        default: ''
    },
    completed: {
        type: Boolean,
        default: false
    },
    finished_at: {
        type: Date,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Exportem el model.
module.exports = mongoose.model('Task', TaskSchema);
