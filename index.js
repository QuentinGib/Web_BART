const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

const clientRoutes = require('./api/user/route/client')
app.use("/client", clientRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

