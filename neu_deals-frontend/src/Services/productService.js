import axios from "axios";


export const getAllProducts = async (body) =>{
    console.log('Recieved:',body);
    let res =  await axios.get("http://localhost:5000/products/getAll");
    console.log(res);
    return res;
}