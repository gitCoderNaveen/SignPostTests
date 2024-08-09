const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    product:String, 
    firmname:String, 
    address:String,
    phonenumber:Number
})

const dataModel = mongoose.model('firmdatas',dataSchema)

module.exports=dataModel