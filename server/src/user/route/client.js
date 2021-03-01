const express = require('express');
const routeur = express.Router();
const client = require('../controller/client')

routeur.post("/register", client.register);
routeur.post("/login", client.login);
routeur.post("/fetch",client.fetchname);
routeur.post("/fetchkey",client.fetchkey);
routeur.post("/fetchname",client.fetchname);

module.exports = routeur;