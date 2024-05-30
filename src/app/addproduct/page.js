// import React from 'react'
"use client"
import { useState } from "react"
import axios from "axios"
import "./product.css"

const page = () => {
    const[name,setName] = useState(null);
    const[price,setPrice] = useState(null);
    const[color,setColor] = useState(null);
    const[category,setCategory] = useState(null);
    const getData = async() =>{
        // console.log(name,price,color,category);
        if(name != null && price != null && color != null && category != null){

            const data = await axios.post("http://localhost:3000/api/products",{
                name,price,color,category
            });
            console.log(data.data);
            if(data.data.success){
                alert("Product Added Successfully");
            }
        }else{
            alert("provide all fields")
        }
    }
  return (
    <div>
        <h1>Add Product</h1>
        <input type="text" placeholder="Add Product Name" className="input" onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Add Price" className="input" onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder="Add Colors" className="input" onChange={(e) => setColor(e.target.value)} />
        <input type="text" placeholder="Add Categories" className="input" onChange={(e) => setCategory(e.target.value)} />
        <button type="submit" onClick={getData} className="btn">Add Product</button>        
    </div>
  )
}

export default page