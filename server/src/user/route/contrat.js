const express = require('express');
const routeur = express.Router();
const contrat = require('../controller/contrat')

routeur.post("/fetch",contrat.fetchall);
routeur.post("/register",contrat.generate);
routeur.post("/modify",contrat.modify);

module.exports = routeur;