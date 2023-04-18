import axios from "axios";

export const userSignupService = async (body) =>{
    console.log('Recieved:',body);
    let res =  await axios.post("http://localhost:8080/user/create",body);
    console.log(res);

    return res;

}


export const userLoginService = async (body) =>{
    console.log('Recieved:',body);
    let res =  await axios.post("http://localhost:8080/user/login",body);
    console.log(res);
    return res;
}