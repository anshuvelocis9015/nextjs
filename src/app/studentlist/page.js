// import React from 'react'
// 'use client'
import Link from "next/link"

const StudentList = () => {
    return (
        <div>
            <h1>StudentList</h1>
            <ul>
                <li>
                    <Link href="/studentlist/anil">Anil</Link>
                </li>
                <li>
                    <Link href="/studentlist/sam">Sam</Link>
                </li>
                <li>
                    <Link href="/studentlist/peter">Peter</Link>
                </li>
                <li>
                    <Link href="/studentlist/bruce">Bruce</Link>
                </li>
            </ul>
        </div>
    )
}

export default StudentList