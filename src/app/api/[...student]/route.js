import { NextResponse } from "next/server";
export async function GET(request,content){
    console.log(content.params.student);
    return NextResponse.json({result:content.params.student});
}