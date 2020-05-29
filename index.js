const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Inicia o App.
const app = express();
app.use(express.json());
app.use(cors());

// Conecta com DB.
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true, useUnifiedTopology: true }
);
//require('./src/models/Product'); => substituida pela require-dir
requireDir('./src/models');

// Rotas.
app.use('/api', require('./src/routes'));

app.listen(3001);   // Faz com que a aplicacao 'ouça' a porta 3001 do browser.