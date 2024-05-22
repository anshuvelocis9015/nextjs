/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["picsum.photos"]
    },
    redirects:async()=>{
        return [
            {
                source:"/image",
                destination:"/",
                permanent:false  //here permanent means seo cant recognise this page if permanent is true if it is false then seo recognise it but it cant access as they thought this page is in building
            },
            {
                source:"/users/:userid",//for dynamic redirect we can use colon
                destination:"/",
                permanent:false
            }
        ]
    }

};

export default nextConfig;
