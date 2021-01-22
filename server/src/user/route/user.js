const express = require('express');
const routeur = express.Router();
const auth = require('./auth.js')
const usermanip = require('../controller/user');

routeur.post("/register", usermanip.register);
routeur.post("/login", usermanip.login);
routeur.get("/reponsesecrete",auth,usermanip.secret); //test pour le middleware qui n'est pas encore concluant



module.exports = routeur;
