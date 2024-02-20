const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.static('public'));

app.get('/api/data', (req, res) => {
    res.json({ message: 'Bonjour du serveur !' });
});

app.listen(port, () => {
    console.log(`Serveur en cours d exécution sur http://localhost:${port}`);
});
