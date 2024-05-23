// import React from 'react'
"use client"
import { useState } from "react";

export default function page(){
    const[name,setName] = useState("");
    const[age,setAge] = useState("");
    const[email,setEmail] = useState("");

    const addUser = async() =>{
        console.log(name,age,email);
        let response = await fetch("http://localhost:3000/api/hello",{
            method:"Post",
            body:JSON.stringify({name,age,email})
        });
        response = await response.json();
        console.log(response);
    }
  return (
    <div>
        <h1>Add User</h1>
        <input type="text" value={name} placeholder="Enter name" onChange={(e) => setName(e.target.value)}/>
        <input type="text" value={age} placeholder="Enter age" onChange={(e) => setAge(e.target.value)}/>
        <input type="text" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
        <button onClick={addUser}>Add user</button>
    </div>
  )
}

// export default page