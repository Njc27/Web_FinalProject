import axios from "axios";


export const getAllProducts = async (body) =>{
    console.log('Recieved:',body);
    let res =  await axios.get("http://localhost:8080/products/getAll");
    console.log(res);
    return res;
}

export const uploadProduct = async(body) =>{
    console.log('Recieved:',body);
    let res =  await axios.post("http://localhost:8080/products/post",body);
    console.log(res);
    return res;
}