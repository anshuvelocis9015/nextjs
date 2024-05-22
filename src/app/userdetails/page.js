// import React from 'react'
'use client'

import Script from "next/script"

const page = () => {
  return (
    <div>
        <Script 
        src="/location.js"
        onLoad={() =>{
            console.log("file loaded");
        }}
        />
        <h1>User Geolocation api</h1>
    </div>
  )
}

export default page