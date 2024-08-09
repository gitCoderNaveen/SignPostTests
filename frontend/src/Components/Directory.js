import React, { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Directory() {
    const [datas, setData] = useState([])
    const [product, setProduct] = useState('')
    const [firmName, setFirmName] = useState('')
    const [firmAddress, setFirmAddress] = useState('')
    const [number, setNumber] = useState()
    const [isPopup, setIsPopup] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            product: product,
            firmname: firmName,
            address: firmAddress,
            phonenumber: number
        }

        axios.post('http://localhost:4001/datas/post', formData)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    const getDatas = (e) => {
        e.preventDefault()
        setIsPopup(!isPopup)

        axios.get('http://localhost:4001/datas/get')
            .then(response => { setData(response.data) })//store data in state
            .catch(error => {
                console.error('error fetching data', error)
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Product :</label>
                <input type='text' onChange={(e)=>{setProduct(e.target.value)}}/><br />
                <label>Company Name :</label>
                <input type='text' value={firmName} onChange={(e) => (setFirmName(e.target.value))} /><br />
                <label>Company Address :</label>
                <textarea value={firmAddress} onChange={(e) => { setFirmAddress(e.target.value) }}></textarea><br />
                <label>Phone Number :</label>
                <input type='text' onChange={(e) => (setNumber(e.target.value))} value={number} /> <br />
                <button type='submit' class='btn btn-primary m-2'>Submit</button>
            </form>
            <form onSubmit={getDatas}>
                <button type='submit' class='btn btn-primary m-2'>Get Data's</button>
            </form>            
               {isPopup &&<div>
                <h1>Data's from MongoDB</h1>
               {datas.map((item, index) => (
                    <ul key={index}>
                        <li>{item.product}</li>
                        <li>{item.firmname}</li>
                        <li>{item.address}</li>
                        <li>{item.phonenumber}</li>
                    </ul>
                ))}
                </div> }
        </div>
    )
}
