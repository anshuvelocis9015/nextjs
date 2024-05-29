import { connect } from "@/lib/connection";
import { Product } from "@/lib/model/product";
import { NextResponse } from "next/server";

connect()

export async function GET(){
    let data = await Product.find();
    console.log(data);
    return NextResponse.json({result:data});
}