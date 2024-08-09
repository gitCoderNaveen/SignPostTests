import React, { useState } from 'react'
import axios from 'axios'

export default function Directory() {
    const [product, setProduct] = useState([])
    const [firmName, setFirmName] = useState('')
    const [firmAddress, setFirmAddress] = useState('')
    const [number, setNumber] =useState()

    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            products:product,
            firmnames:firmName,
            firmAddress:firmAddress, 
            phonenumber:number
        }

        axios.post('')
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Product :</label>
        <input type='text' onChange={(e)=>(setProduct(e.target.value))} value={product}/><br/>
        <label>Company Name :</label>
        <input type='text' onChange={(e)=>(setFirmName(e.target.value))} value={firmName}/><br/>
        <label>Company Address :</label>
        <textarea onChange={(e)=>{setFirmAddress(e.target.value)}} value={firmAddress}></textarea><br/>
        <label>Phone Number :</label>
        <input type='text' onChange={(e)=>(setNumber(e.target.value))} value={number}/> <br/>
        <button type='submit'>Submit</button>       
      </form>
    </div>
  )
}
