// import React from 'react'
"use client"
import { useEffect, useState } from "react";
import axios from "axios";

const page = ({params}) => {
    console.log(params.userlistid);
    const id = params.userlistid;
    const[name,setName] = useState("");
    const[age,setAge] = useState("");
    const[email,setEmail] = useState("");
    useEffect(() =>{
        getUserList();

    },[])
    const getUserList = async()=>{
        const data = await axios.get(`http://localhost:3000/api/hello/${id}`)
        console.log(data.data.result);
        setName(data.data.result.name);
        setAge(data.data.result.age);
        setEmail(data.data.result.email);
    }
    async function updateUser(){
        console.log(name,age,email);
        const response = await axios.put(`http://localhost:3000/api/hello/${id}`,{
        name,age,email});
        console.log(response.data.result);
    }
  return (
    <div>
        <h1>update detail page</h1>
        <input type="text" value={name} placeholder="Enter name" onChange={(e) => setName(e.target.value)}/>
        <input type="text" value={age} placeholder="Enter age" onChange={(e) => setAge(e.target.value)}/>
        <input type="text" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
        {/* <button onClick={addUser}>Add user</button> */}
        <button onClick={updateUser}>Update user</button>
    </div>
  )
}

export default page