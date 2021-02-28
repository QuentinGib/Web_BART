// const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const express = require('express')

const app = express()
const port = 3000

const router = require('./routes/index.js')

// dotenv.config()
const cors = require("cors");
app.use(cors());

app.use(bodyParser.json())
app.use('/api/v1', router)

// BDD region

app.use(bodyParser.urlencoded({ extended: false }));

const clientRoutes = require('./user/route/client.js')
app.use("/client", clientRoutes);
const collabroutes = require('./user/route/collab')
app.use("/collab",collabroutes)
const contratroutes = require('./user/route/contrat')
app.use("/contrat",contratroutes)
// end region BDD

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})