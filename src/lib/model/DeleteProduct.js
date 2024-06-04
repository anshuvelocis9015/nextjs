"use client"
import axios from "axios";
import { useRouter } from "next/navigation";

export default function DeleteProduct(props){
    const router = useRouter();
    // console.log("props---->",props.id);
    const deleteProduct = async() =>{
        console.log("delete product");
        const data = await axios.delete("http://localhost:3000/api/products/"+props.id);
        console.log(data.data.success);
        if(data.data.success){
            alert("delete product successfully");
            router.push("/getproduct");
        }
    }
    return(
        <div>
            <button onClick={deleteProduct}>Delete</button>
        </div>
    )
}