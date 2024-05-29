import mongoose from "mongoose";

const { username, password } = process.env;
//export const connectionStr = "mongodb+srv://anshukumar:Anshu@cluster0.2ulhw39.mongodb.net/ProductDB?retryWrites=true&w=majority&appName=Cluster0";

export const connect = async function () {
    try {
        let response = await mongoose.connect('mongodb://anshukumar:sHfFK3yyMPChCA56@ac-akgxapc-shard-00-00.2ulhw39.mongodb.net:27017,ac-akgxapc-shard-00-01.2ulhw39.mongodb.net:27017,ac-akgxapc-shard-00-02.2ulhw39.mongodb.net:27017/?ssl=true&replicaSet=atlas-wer65u-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0');
        console.log('Connected to DB');

    } catch (error) {
        console.log(error);
    }
}


