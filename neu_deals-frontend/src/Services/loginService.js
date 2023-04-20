import axios from "axios";

export const userSignupService = async (body) =>{
    console.log('Recieved:',body);
    let res =  await axios.post("http://localhost:5000/user/create",body);
    console.log(res);
    sessionStorage.setItem('userId', (JSON.stringify( res?.data?.userId)));
    return res;

}


export const userLoginService = async (body) =>{
    console.log('Recieved:',body);
    let res =  await axios.post("http://localhost:5000/user/login",body);
    console.log(res);
    sessionStorage.setItem('userId',(JSON.stringify( res?.data?.userData)));
    return res;
}