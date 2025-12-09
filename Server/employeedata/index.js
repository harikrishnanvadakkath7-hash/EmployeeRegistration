let express = require("express");
let app = express();
let port = 3002;
let path = require('./route.js')
let database = require('./database.js');
let parser = require('body-parser');
let cors = require("cors");
app.use(express.static(`${__dirname}/upload`));
app.use(cors())
app.use(parser.json())
app.use("" , path)
let server = app.listen(port , function()
{
    console.log("Server is created !!")
})