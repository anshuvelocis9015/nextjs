// import React from 'react'
"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import "../product.css"

const page = (content) => {
    const[name,setName] = useState("");
    const[price,setPrice] = useState("");
    const[color,setColor] = useState("");   
    const[category,setCategory] = useState("");

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
        {/*24132+3460 = 27592-17000 = 10592 700+3000+2000+1300+1500+600+400+500+2000=11000 11000-10592=0408     */}
    </div>
  )
}

export default page