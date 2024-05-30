// import React from 'react'
import axios from 'axios'
const getProductList = async() =>{
    const product = await axios.get("http://localhost:3000/api/products",{
        headers:{
            "Content-Type":"application/json"
        }
    });
    return product.data.result
}

const page = async() => {
    const productListing = await getProductList();
    console.log(productListing);
  return (
    <div>
        <h1>Get ProductList</h1>
        <table border="1">
            <thead>
                <tr>
                <td>Name</td>
                <td>Price</td>
                <td>Color</td>
                <td>Category</td>
                </tr>
            </thead>
            <tbody>
                {productListing.map((product) =>{
                   return( <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.color}</td>
                        <td>{product.category}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    </div>
  )
}

export default page