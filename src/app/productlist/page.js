// // import React from 'react'
// 'use client'
// import { useEffect,useState } from "react"
import axios from "axios";
import Product from "./product";
// import './loading';
import './style.css';

// const page = () => {
//     const[products,setProducts] = useState([]);
//     useEffect( () =>{

//         const fetchData = async() => {
//             // const res = await fetch('https://dummyjson.com/products');
//             const res = await axios.get('https://dummyjson.com/products');
//             console.log("res-->",res.data.products);
//             // const data = await res.json();
//             // console.log("data--->",data);
//             setProducts(res.data.products);
//         }
//         fetchData();
        
//     },[])
//   return (
//     <div>
//         <h1>Productlist</h1>
//         {
//             products.map((item) =>{
//                 console.log("item --->",item);
//                 return(
//                     <div>
//                         <h3>Name: {item.title},  Price: {item.price}</h3>
//                         {/* <h3>{item.price}</h3> */}
//                     </div>
//                 )
//             })
//         }
//     </div>
//   )
// }

// export default page

async function ProductList(){
    const res = await axios.get("https://dummyjson.com/products")
    console.log("res--->",res.data.products);
    return res.data.products;
}

let products = await ProductList();
console.log("products====>",products);
const page = () =>{
    console.log("products====>",products);
    return(
        <div>
            {
                products.map((item) =>{
                    console.log("item",item);
                    return(
                        // <div key={item.id}> 
                        
                            
                            <Product key={item.id} item={item}/>                            
                        // </div>
                    )
                })
            }
        </div>
    )
}

export default page