import { user } from "@/util/db"
import { NextResponse } from "next/server";
// import 
export function GET(){
    const data = user;
    // console.log(data);
    return NextResponse.json(data,{status:200});
}

export async function POST(request){
    // console.log("request----------->",request);
    let payload = await request.json();
    console.log(payload.name);
    if(!payload.name || !payload.age || !payload.email){
        return NextResponse.json({result:"required new field",success:false},{status:400})
    }
    return NextResponse.json({result:"new user created",success:true},{status:200})
}