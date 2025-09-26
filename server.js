const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/finanzmanager';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB Verbindungsfehler:'));

db.once('open', () => {
  console.log('Datenbank verbunden');
});

app.listen(port, () => {
  console.log(`Server läuft auf Port: ${port}`);
});