// import React from 'react'
import Link from 'next/link';
import getUsers from "../../../services/getUsers"
import { API_BASE_URL } from '@/config/constants';

export default async function page() {
    const getUserList = getUsers();
    const users = await getUserList;
    console.log("user----->", users);
    console.log("process.env---->", process.env.SERVER_PASSWORD);
    return (
        <div>
            <h1>Users</h1>
            {
                process.env.NODE_ENV=="development"?
                <h1>You are on development mode</h1>
                :<h1>You are on production mode</h1>
            }
            {users.map((user) => {
                return (
                    <h1 key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </h1>
                )
            })}
            {API_BASE_URL}
        </div>
    )
}

