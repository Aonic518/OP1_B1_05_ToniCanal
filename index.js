require('dotenv').config({ quiet: true });

const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 3000;

// Connectem amb MongoDB i iniciem el servidor quan la connexió s'ha establert.
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connexió a MongoDB establerta.');

        app.listen(PORT, () => {
            console.log(`Servidor en funcionament a http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.log('Error en connectar amb MongoDB:', err.message);
        process.exit(1);
    });
