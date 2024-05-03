// import React from 'react'
'use client'

const Student = ({params}) => {
    console.log(params);
  return (
    <div>
        <h1>Student</h1>
        <h2> Name : {params.student}</h2>
    </div>
  )
}

export default Student