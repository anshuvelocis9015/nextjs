// import React from 'react'
import Link from 'next/link';
import getUsers from "../../../services/getUsers"

export default async function page() {
    const getUserList = getUsers();
    const users = await getUserList;
    console.log("user----->", users);
    return (
        <div>
            <h1>Users</h1>
            {users.map((user) =>{
                return (
                    <h1 key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </h1>
                )
            })}
        </div>
    )
}
// 24132-500-1000-3000-2000=24132-6500-1000= 24132-7500=16632
// 24132-7500 = 16632-3500 = 13132
