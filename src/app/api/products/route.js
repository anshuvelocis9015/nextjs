import { connect } from "@/lib/connection";
import { Product } from "@/lib/model/product";
import { NextResponse } from "next/server";

connect()

export async function GET(){
    let data = await Product.find();
    console.log(data);
    return NextResponse.json({result:data,success:true});
}

export async function POST(request){
    const payload = await request.json();
    const response = new Product(payload);
    const result = await response.save();
    console.log(result);
    return NextResponse.json({result:result,success:true});
}