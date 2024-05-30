// // const { default: mongoose } = require("mongoose");
import mongoose from "mongoose";


const productModel = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
});

export const Product = mongoose.models.products || mongoose.model("products",productModel);









// import mongoose from "mongoose";

// // Define the product schema with precise types
// const productSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true // Adds validation to ensure name is required
//     },
//     price: {
//         type: Number, // Assuming price should be a number
//         required: true
//     },
//     company: {
//         type: String,
//         required: true
//     },
//     color: {
//         type: String,
//         required: true
//     },
//     category: {
//         type: String,
//         required: true
//     }
// }, { timestamps: true }); // Adds createdAt and updatedAt timestamps automatically

// // Check if the model already exists to avoid re-compiling the model
// const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

// export default Product;