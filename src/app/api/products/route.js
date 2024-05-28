import { connectionStr } from "@/lib/connection";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    const connnnnn=await mongoose.connect(connectionStr);
    console.log("connnnnn",connnnnn)
    const data = await Product.find();
    console.log("data",data);
    return NextResponse.json({result:true});
}


// import { connectionStr } from "@/lib/connection";
// import { Product} from "../../../lib/model/product"
// import mongoose from "mongoose";
// import { NextResponse } from "next/server";

// // Function to establish a connection to the database
// async function connectToDatabase() {
//     if (mongoose.connections[0].readyState) {
//         // Use existing database connection
//         console.log("Using existing database connection");
//         return;
//     }

//     // Use new database connection
//     try {
//         await mongoose.connect(connectionStr, {
//             // useNewUrlParser: true,
//             // useUnifiedTopology: true,
//         });
//         console.log("Database connected successfully");
//     } catch (error) {
//         console.error("Database connection error:", error);
//         throw new Error("Database connection failed");
//     }
// }

// export async function GET() {
//     try {
//         // Ensure database is connected
//         await connectToDatabase();

//         // Fetch data from the database
//         const data = await Product.find();
//         console.log("Fetched data:", data);

//         // Return fetched data
//         return NextResponse.json({ result: true, data });
//     } catch (error) {
//         console.error("Error in GET request:", error);
//         return NextResponse.json({ result: false, error: error.message });
//     }
// }