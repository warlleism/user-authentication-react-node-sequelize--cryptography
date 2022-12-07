const express = require("express");
const Router = express.Router();

const Auth = require('./read')
const Create = require('./create')

Router.post("/user", Auth)
Router.post("/create", Create)

module.exports = Router;