const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const dataModel = require('../models/data-models')

router.use(bodyParser.json())
router.get('/', (req, res)=>{
    res.send('Datas Page')
})

router.post('/post', (req, res) =>{
    console.log(req.body)
    const newData = new dataModel(req.body)

    newData.save()
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send(`Data's post page`)
})

router.get('/get', async (req, res)=>{
    try {
        const data = await dataModel.find()// fetch all documents
        res.json(data); //send data as JSON
    }catch(err){
        res.status(500).send('Error')
    }
})


module.exports=router

