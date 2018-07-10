const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
        unique:true
    },

    isDone:{
        type:Boolean,
        default:false
    },

    date:{
        type:Date,
        default:Date.now()
    }
})


module.exports = mongoose.model('todos',schema);