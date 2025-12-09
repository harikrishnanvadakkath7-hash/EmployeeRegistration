const mongoose = require('mongoose');
const likeSchema = new mongoose.Schema({
    likegot:{
        type :mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "employee"
    },
    likegiven:{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "employee"
    }
})
module.exports = new mongoose.model('like' , likeSchema)