const express = require('express');
const routeur = express.Router();
const contrat = require('../controller/contrat')



routeur.post("/fetch",contrat.fetchall);



module.exports = routeur;