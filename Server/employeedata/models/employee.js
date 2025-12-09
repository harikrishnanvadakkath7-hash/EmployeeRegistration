const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    firstname:{
        type : String,
        required :true
    },
    lastname:{
        type : String,
        required :true
    },
    email:{
        type : String,
        require : true
    },
    contact:{
        type : Number,
        require : true
    },
    image:{
        type : Object,
        require : true
    },
    designation:{
        type : String,
        require : true
    },
    regusername:{
        type : String,
        required :true
    },
    regpassword:{
        type:String,
        required :true
    },
})
module.exports = new mongoose.model('employee' , employeeSchema)