const express = require('express')
const datas = require('./routes/datas')
const mongoose = require('mongoose')
const dataModel = require('./models/data-models')
const cors = require('cors')
const app = express()

app.use(cors())
mongoose.connect('mongodb://127.0.0.1:27017/ProductDirectory')

mongoose.connection.on('connected', ()=>{
    console.log('MongoDB successfully connected')
})


app.use('/datas', datas)

app.listen(4001, ()=>{
    console.log("server is running on port 4001")
})