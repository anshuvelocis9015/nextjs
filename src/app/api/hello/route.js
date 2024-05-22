import { user } from "@/util/db"
import { NextResponse } from "next/server";
// import 
export function GET(){
    const data = user;
    console.log(data);
    return NextResponse.json(data,{status:200});
}