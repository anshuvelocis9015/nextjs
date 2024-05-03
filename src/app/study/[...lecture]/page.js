// import React from 'react'
'use client'

const Lecture = ({params}) => {
    console.log(params);
  return (
    <div>
        <h1>{params.lecture[0]}</h1> 
        <h1>{params.lecture[1]}</h1>
    </div>
  )
}

export default Lecture