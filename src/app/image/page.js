// import React from 'react'
import Image from "next/image"
import profile from "../../../public/vercel.svg"
import { Roboto } from "next/font/google";
const roboto = Roboto({
    weight:'300',
    subsets:['latin'],
    display:"swap"
}
)

const page = () => {
    console.log("profile----->",profile);
  return (
    <div>
        <h1>Image optimization</h1>
        {/* <Image src={profile}/>
        <img src={profile.src}/> */}
        <Image src="https://picsum.photos/id/237/200/300" width={200} height={200}/>
        <h1 className={roboto.className}>Font optimization technique</h1>
        {/* <h1 style={{fontFamily:'Roboto',fontWeight:100}}>Font optimization technique</h1> */}

    </div>
  )
}
//22461 2924-2500 = 424 22461-424= 22037 22037-1000 =  21037-13000= 08037-500= 7537

export default page

export function generateMetadata(){
  // console.log(params,"-----params of image")
  return{
    title:"image optimization",
    description:"image file description"
  }
}