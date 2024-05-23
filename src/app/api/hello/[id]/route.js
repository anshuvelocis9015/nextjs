import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request,content){
    const data = user.filter((item) => item.id==content.params.id);
    console.log(data,content.params.id);
    return NextResponse.json(data.length==0?{result:"No result found",success:false}:{result:data[0],success:true,status:200})
}