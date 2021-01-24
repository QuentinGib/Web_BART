// const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const express = require('express')

const app = express()
const port = 3000

const router = require('./routes/index.js')

// dotenv.config()

app.use('/api/v1', router)

app.use(bodyParser.json())

// BDD region
const cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const clientRoutes = require('./user/route/client.js')
app.use("/client", clientRoutes);
// end region BDD

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})