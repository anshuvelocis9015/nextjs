
import { connect } from "@/lib/connection";
import { Product } from "@/lib/model/product";
import { NextResponse } from "next/server";

connect()
export async function PUT(request,content){
    console.log("content --->",content);
    const payload = await request.json();
    console.log("payload --->", payload);
    let productId = content.params.productid;
    console.log("id --->", productId);
    const filter = {_id: productId};
    console.log("filter--------->",filter);
    const result = await Product.findOneAndUpdate(filter,payload);

    return NextResponse.json({result:result,success:true});
}

export async function GET(request,content){
    console.log("content get --->",content);
    let productId = content.params.productid;
    console.log("id get--->", productId);
    const record = {_id: productId};
    console.log("filter record--------->",record);
    const result = await Product.findById(record);

    return NextResponse.json({result:result,success:true});
}

export async function DELETE(request,content){
    console.log("content get --->",content);
    let productId = content.params.productid;
    console.log("id get--->", productId);
    const record = {_id: productId};
    console.log("filter record--------->",record);
    const result = await Product.deleteOne(record);

    return NextResponse.json({result:result,success:true});
}