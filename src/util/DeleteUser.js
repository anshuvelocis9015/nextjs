"use client"
import axios from "axios";

export default function DeleteUser(props){
    console.log(props.id);
    const deleteuser = async() =>{
        // let data = await fetch(`http://localhost:3000/api/hello/${props.id}`,{
        //     method:"delete"
        // });
        // data = data.json();
        // console.log(data);
        let data = await axios.delete(`http://localhost:3000/api/hello/${props.id}`);
        console.log(data.data);
        if(data.data.success){
            alert("User deleted successfully");
        }
        else{
            alert("Something went wrong");
        }
    }
    return(
        
            <button onClick={deleteuser}>delete</button>
        
    )
        
    
}