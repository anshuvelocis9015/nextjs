// import React from 'react'
"use client"

import { useState } from "react";
// import axios from "axios";

const page = () => {
    const[file,setFile] = useState();

    const onSubmit = async(e) =>{
        e.preventDefault();
        // console.log(e.target.image.files[0]);
        console.log(file);
        const data = new FormData();
        data.set('file',file);
        let result = await fetch("api/upload",{
                method:"POST",
                body:data
            });
            result = await result.json();
            console.log(result);
            if(result.success){
                alert("file upload Successfully");
            }
        else{
            alert("provide all fields")
        }

    }
  return (
    <div>
        <h1>Upload image</h1>
        <form onSubmit={onSubmit}>
            <input type="file" name="file" onChange={(e) => setFile(e.target.files?.[0])}required />
            <button type="submit">Upload</button>
        </form>
    </div>
  )
}

export default page