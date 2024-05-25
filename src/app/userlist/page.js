// import React from 'react'
// import deleteuser from "@/util/deleteuser";
import DeleteUser from "@/util/DeleteUser";
import Link from "next/link";
async function getUserList(){
    let data = await fetch("http://localhost:3000/api/hello");
    data = data.json();
    return data;
}

export default async function page(){
    const userList = await getUserList();
    console.log("userList---->",userList);
  return (
    <div>
        <h1>userlist</h1>
        {
            userList.map((item) =>{
                return(
                    <div key={item.id}>
                        <span><Link href={`userlist/${item.id}`}>{item.name}</Link></span>
                        <span><Link href={`userlist/${item.id}/update`}>Edit</Link></span>
                        <DeleteUser id={item.id} />
                    </div>
                )
            })
        }
    </div>
  )
}

