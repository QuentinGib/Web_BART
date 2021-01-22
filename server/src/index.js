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
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
mongoose.connect('mongodb+srv://liviator:liviator@cluster0.h11ry.mongodb.net/Cluster0?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

const userRoutes = require("./user/route/user"); 
app.use("/user", userRoutes);
// end region BDD

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})