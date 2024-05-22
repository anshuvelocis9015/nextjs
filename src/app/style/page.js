// import React from 'react'
import inside from './inside.module.css'
import custom from '@/custom.module.css'

const page = () => {
  return (
    <div>
        <h1 className={inside.main}>Style with module</h1>
        <h1 className={custom.main}>Style with module</h1>
        <h1 className="main">Style with module</h1>
    </div>
  )
}

export default page