const express   = require('express');
const router    = express.Router();
const Job       = require('../models/Job');

// Test route
router.get('/test', (req, res) => {
    res.send("Deu certo");
});

// Add job by POST
router.post('/add', (req, res) => {
    let {title, salary, company, description, email, new_job} = req.body;

    // Insert
    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log("Erro: ", err));
})

module.exports = router;