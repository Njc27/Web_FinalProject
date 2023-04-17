import { ActionTypes } from "../constants/actionTypes";
// import { userSignupService } from "../Services/loginService";
import { userSignupService } from "../../Services/loginService";

export const userSignup = async(fname,lname,email,phoneNumber,address,password) =>{
    console.log('Received', fname,lname,email,phoneNumber,address,password);

    let body = {
        fname:fname,
        lname:lname,
        email:email,
        phoneNumber:phoneNumber,
        address:address,
        password:password
    }

    return async(dispatch)=>{
        let respnd = await userSignupService(body);
    if(respnd.status === 201){
        dispatch({
            type:ActionTypes.SIGNUP_ACTION,
            payload:respnd
        })
    }
    else{
        dispatch({
            type:ActionTypes.SIGNUP_ACTION,
            payload:null
        })
    }
    console.log(respnd)
    }
  
    


}
