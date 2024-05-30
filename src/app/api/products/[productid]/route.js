
import { connect } from "@/lib/connection";
import { Product } from "@/lib/model/product";
import { NextResponse } from "next/server";

connect()
export async function PUT(request,content){
    console.log(content);
    const payload = await request.json();
    const productId = content.params.productId;
    const filter = {_id: productId}
    console.log(filter);
    const result = await Product.findOneAndUpdate(filter,payload);

    return NextResponse.json({result:result});
}