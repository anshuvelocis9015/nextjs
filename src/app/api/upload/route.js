import { NextResponse } from "next/server";
import {writeFile} from 'fs/promises'

export async function POST(req) {
    const data = await req.formData();
    const file = data.get('file');
    console.log(file);
    if (!file) {
        return NextResponse.json({ result: "file not found", success: false }, { status: 400 });
    }
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `./public/${file.name}`;
    await writeFile(path,buffer);
    return NextResponse.json({ result: "file uploaded", success: true }, { status: 200 });
}