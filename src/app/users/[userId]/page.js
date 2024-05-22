// import React from 'react'
import getUsers from "../../../../services/getUsers"

export default async function page(props) {
    const getUserList = getUsers();
    const users = await getUserList;
    const currentId = props.params.userId;
    const userData = users[currentId-1];
    console.log("user----->", users);
    console.log("users props----->", props.params.userId);
    console.log("currentId----->", users[currentId-1]);
    return (
        <div>
            <h1>User Detail Page</h1>
            <h2>{userData.name}</h2>
            <h2>{userData.id}</h2>
            <h2>{userData.website}</h2>


        </div>
    )
}

export async function generateStaticParams(){
    const getUserList = getUsers();
    const users = await getUserList;
    return users.map(user =>({
        userId: user.id.toString()
    }))    
}

