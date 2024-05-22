import axios from "axios";

export default async function getUsers(){
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log("res--->",res);
    return res.data;
}