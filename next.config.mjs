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
                permanent:false
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
