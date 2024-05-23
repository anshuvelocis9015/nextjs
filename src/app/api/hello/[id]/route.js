import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request,content){
    const data = user.filter((item) => item.id==content.params.id);
    console.log(data,content.params.id);
    return NextResponse.json(data.length==0?{result:"No result found",success:false}:{result:data[0],success:true,status:200})
}
export async function PUT(request,content){
    let payload = await request.json();
    let userid = content.params.id;
    payload.id = content.params.id;
    console.log(userid);
    console.log(payload.name,payload.age,payload.email,payload.id);
    if(!payload.name || !payload.age || !payload.email || !payload.id){
        return NextResponse.json({result:"required new field",success:false},{status:400})
    }
    return NextResponse.json({result:payload,success:true},{status:200})
}