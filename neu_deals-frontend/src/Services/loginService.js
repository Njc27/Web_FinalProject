import axios from "axios";

export const userSignupService = async (body) =>{
    console.log('Recieved:',body);

// await axios.post('http://localhost:8080/user/login', body)
//             .then((res) => {
//                 console.log(res);
//                 return (res)
//             }).catch((error) => {
//                 console.log(error)
//             });

    let res =  await axios.post("http://localhost:8080/user/create",body);
    console.log(res);

    return res;

}