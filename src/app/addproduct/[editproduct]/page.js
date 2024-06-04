// import React from 'react'
"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import "../product.css"

const page = (content) => {
    const[name,setName] = useState(null);
    const[price,setPrice] = useState(null);
    const[color,setColor] = useState(null);
    const[category,setCategory] = useState(null);

    useEffect(() =>{
        // console.log(content.params.editproduct);
        getDataList();
    },[]);

    const getDataList = async() =>{
        let productId = content.params.editproduct;
        var data = await axios.get("http://localhost:3000/api/products/"+productId);
        console.log(data.data);
        if(data.data.success){
            let result = data.data.result;
            console.log("result:------> " , result);
            setName(result.name);
            // console.log(name);
            setPrice(data.data.result.price);
            setColor(data.data.result.color);
            setCategory(data.data.result.category);
        }
    }
    const updateData = async() =>{
        let productId = content.params.editproduct;
        let data = await axios.put("http://localhost:3000/api/products/"+productId,{
            name,price,color,category
        });
        // console.log(data.data);
        if(data.data.success){
            alert("Product Updated Successfully");
        }

    }
  
  return (
    <div>
        <h1>Update Product</h1>
        <input type="text" value={name} placeholder="Add Product Name" className="input" onChange={(e) => setName(e.target.value)} />
        <input type="text" value={price} placeholder="Add Price" className="input" onChange={(e) => setPrice(e.target.value)} />
        <input type="text" value={color} placeholder="Add Colors" className="input" onChange={(e) => setColor(e.target.value)} />
        <input type="text" value={category} placeholder="Add Categories" className="input" onChange={(e) => setCategory(e.target.value)} />
        <button type="submit" onClick={updateData} className="btn">Update Product</button>        
    </div>
  )
}

export default page