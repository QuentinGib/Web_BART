const express = require('express')
const app = express()
const port = 3000
const cors = require("cors");
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

const clientRoutes = require('./api/user/route/client')
app.use("/client", clientRoutes);
const collabroutes = require('./api/user/route/collab')
app.use("/collab",collabroutes)
const contratroutes = require('./api/user/route/contrat')
app.use("/contrat",contratroutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

