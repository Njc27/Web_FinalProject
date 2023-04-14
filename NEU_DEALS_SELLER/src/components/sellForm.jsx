import react from "react"
import PageTitle from "./sellTitle"
import Nav from "./nav"
import { Navigate, useNavigate, useParams } from "react-router-dom"

export default function(){
    const {item}=useParams();
    const navigate=useNavigate();
    
    const handleClick = (event)=>{
        navigate("/sell")
    }
    return(
       <>
            <Nav/>
            <PageTitle/>
            <div className="container border" style={{width:"60%"}}>  
                <div className="my-3 mx-2" style={{textAlign:"left"}}>
                    <h5>SELECTED CATEGORY : {item}</h5>
                    <p style={{textDecoration:"underline"}} onClick={handleClick}>Back</p>
                </div>
                <hr/>
                <div className="my-3 mx-4" style={{textAlign:"left"}}>
                    <h5 className="my-3">INCLUDE DETAILS</h5>
                    <form action="">
                        <div class="mb-3 col-md-6">
                            <label for="exampleFormControlInput1" class="form-label">Ad Title *</label>
                            <input type="text" class="form-control" id="ad-title" required/>
                            </div>
                            <div class="mb-3 col-md-6">
                            <label for="exampleFormControlTextarea1" class="form-label">Ad Description *</label>
                            <textarea class="form-control" id="ad-description" rows="3" required></textarea>
                        </div>
                        <hr/>
                            <h5 className="my-3">SET A PRICE</h5>
                            <div className="input-group mb-3 col-md-6">
                            <span class="input-group-text">$</span>
                                <div className="form-floating">
                                    <input type="number" style={{width: "48%"}} class="form-control" id="item-price" placeholder="Amount" required/>
                                    <label for="floatingInputGroup1">Price *</label>
                                </div>
                            </div>
                        <hr/>
                            <h5 className="my-3">UPLOAD UPTO 6 IMAGES</h5>
                            <div class="d-flex flex-row">
                                <div class="mb-3 mx-1" style={{width:"33%"}}>
                                    <input class="form-control" type="file" id="formFile" required/>
                                </div>    
                                <div class="mb-3 mx-1" style={{width:"33%"}}>
                                    <input class="form-control" type="file" id="formFile" required/>
                                </div>
                                <div class="mb-3 mx-1" style={{width:"33%"}}>
                                    <input class="form-control" type="file" id="formFile" />
                                </div>                            
                            </div>
                            <div class="d-flex flex-row">
                                <div class="mb-3 mx-1" style={{width:"33%"}}>
                                    <input class="form-control" type="file" id="formFile" />
                                </div>    
                                <div class="mb-3 mx-1" style={{width:"33%"}}>
                                    <input class="form-control" type="file" id="formFile" />
                                </div>
                                <div class="mb-3 mx-1" style={{width:"33%"}}>
                                    <input class="form-control" type="file" id="formFile"/>
                                </div>                            
                            </div>
                        <hr/>
                            <h5 className="my-3">CONFIRM YOUR LOCATION</h5>
                            <div className="address">
                                
                            </div>
                        <hr/>
                            <h5 className="my-3">REVIEW YOUR DETAILS</h5>
                            <div class="mb-3 col-md-6">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input type="text" class="form-control" id="user-name"/>
                            </div>
                            <div className="input-group mb-3 col-md-6">
                            <span class="input-group-text">+1</span>
                                <div className="form-floating">
                                    <input type="text" style={{width: "48%"}} class="form-control" id="user-mobile" placeholder="" required/>
                                    <label for="floatingInputGroup1">Mobile Phone Number *</label>
                                </div>
                            </div>
                    </form>
                </div>
            </div>
       </>
    )
} 