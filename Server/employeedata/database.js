let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/employeedb');
let database = mongoose.connection;
database.on('error',console.error.bind(console,'connection error:'));
database.once('open' , function()
{
  console.log("Connection Successful !")
})