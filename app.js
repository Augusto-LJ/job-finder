const express       = require('express');
const exphbs        = require('express-handlebars');
const app           = express();
const path          = require('path');
const db            = require('./db/connection');
const bodyParser    = require('body-parser');
const Job           = require('./models/Job');

const PORT          = 3000;

app.listen(PORT, function() {
    console.log(`Está escutando a porta ${PORT}`);
});

// Body parser
app.use(bodyParser.urlencoded({extended: false}));

// Handle bars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

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
    Job.findAll({order: [
        ['createdAt', 'DESC']
    ]})
    .then(jobs => {
        res.render('index', {
            jobs
        });
    });
    
    
})

// Jobs routes
app.use('/jobs', require('./routes/jobs'));