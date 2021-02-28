const express = require('express');
const routeur = express.Router();
const collab = require('../controller/collab')


routeur.post("/fetch",collab.fetchcollab);



module.exports = routeur;