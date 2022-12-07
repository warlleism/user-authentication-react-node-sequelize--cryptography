const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")
const app = express()
const routes = require("./controllers/routes");

app.listen('3003', () => {
    console.log("conectado")
})

require('./database/index')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}));

app.use(routes);