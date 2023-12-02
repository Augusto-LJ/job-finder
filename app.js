const express       = require('express');
const app           = express();
const db            = require('./db/connection');
const bodyParser    = require('body-parser');
const PORT          = 3000;

app.listen(PORT, function() {
    console.log(`Está escutando a porta ${PORT}`);
});

// Body parser
app.use(bodyParser.urlencoded({extended: false}));

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

// Jobs routes
app.use('/jobs', require('./routes/jobs'));