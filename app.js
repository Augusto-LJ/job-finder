const express = require('express');
const app = express();
const db = require('./db/connection');
const PORT = 3000;

app.listen(PORT, function() {
    console.log(`Está escutando a porta ${PORT}`);
});

// DB connection
db
    .authenticate()
    .then(() => {
        console.log("Conectou com sucesso");
    })
    .catch(err => {
        console.log("Ocorreu um erro ao conectar: ", err);
    });
    

// Routes
app.get('/', (req, res) => {
    res.send("Está funcionando");
})