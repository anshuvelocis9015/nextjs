// import React from 'react'
import { NextResponse } from "next/server";

const middleware = (request) => {
    // console.log("middleware");
    console.log("request", request);
  return NextResponse.redirect(new URL("/dashboard",request.url))
}

export default middleware

export const config = {
    matcher: ["/studentlist/:path*","/study/:path*"]
}