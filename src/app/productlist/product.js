// import React from 'react'
'use client'
import { useState } from "react";

const Product = ({item}) => {
  const [color,setColor] = useState("red");
    // console.log(props);
  return (
    <div style={{border: '1px solid'}}>
      <h3 style={{ color: color }}>Name: {item.title},  Price: {item.price}</h3>
        <button onClick={() => setColor("green")} style={{backgroundColor:"blue"}}>Check Price</button>
    </div>
  )
}

export default Product