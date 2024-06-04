// import React from 'react'
import DeleteProduct from '@/lib/model/DeleteProduct';
import axios from 'axios'
import Link from 'next/link'
const getProductList = async() =>{
    const product = await axios.get("http://localhost:3000/api/products",{cache:"no-cache"},{
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
                        <td><Link href={"addproduct/"+product._id}>Edit Product</Link></td>
                        <td>
                            <DeleteProduct id={product._id}/>
                        </td>


                    </tr>)
                })}
            </tbody>
        </table>
    </div>
  )
}

export default page