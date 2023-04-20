import react from "react"
import { useState } from "react";
import { Navigate, useNavigate, useParams} from "react-router-dom"
import "./sellForm.css"
export default function(){
    const {item}=useParams();
    const navigate=useNavigate();
    
    const [adTitle, setAdTitle] = useState('');
    const [adProductBrand, setAdProductBrand] = useState('');
    const [adDescription, setAdDescription] = useState('');
    const [itemPrice, setItemPrice] = useState(0);
    const [discountedPrice, setDiscountedPrice] = useState(0);
    const [imageFiles, setImageFiles] = useState([]);
    const [addressLine1, setAddressLine1] = useState('');
    const [cityName, setCityName] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [userName, setUserName] = useState('');
    const [userMobile, setUserMobile] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('adTitle', adTitle);
        formData.append('adProductBrand', adProductBrand);
        formData.append('adDescription', adDescription);
        formData.append('itemPrice', itemPrice);
        formData.append('discountedPrice', discountedPrice);
        for (let i = 0; i < imageFiles.length; i++) {
        formData.append('imageFiles', imageFiles[i]);
        }
        formData.append('addressLine1', addressLine1);
        formData.append('cityName', cityName);
        formData.append('zipCode', zipCode);
        formData.append('userName', userName);
        formData.append('userMobile', userMobile);

        fetch('/api/ads', {
        method: 'POST',
        body: formData,
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));

        navigate("/home")
    };


    const handleClick = (event)=>{
        navigate("/sell")
    }

    return(
       <>
            <div className="external-container container border" style={{width:"60%"}}>  
                <div className="my-3 mx-2" style={{textAlign:"left"}}>
                    <h5>SELECTED CATEGORY : {item}</h5>
                    <button onClick={handleClick}>
                        <p>BACK</p>
                    </button>
                    {/* <p style={{textDecoration:"underline"}} onClick={handleClick}>BACK</p> */}
                </div>
                <hr/>
                <div className="my-3 mx-4" style={{textAlign:"left"}}>
                    <h5 className="my-3">INCLUDE DETAILS</h5>
                    <form action={handleSubmit}>
                        <div class="mb-3 col-md-6">
                            <label for="exampleFormControlInput1" class="form-label">Ad Title *</label>
                            <input type="text" class="form-control" id="ad-title" value={adTitle} onChange={(event) => setAdTitle(event.target.value)} required/>
                        </div>
                        <div class="mb-3 col-md-6">
                            <label for="exampleFormControlInput1" class="form-label">Product Brand *</label>
                            <input type="text" class="form-control" id="ad-product-brand" value={adProductBrand} onChange={(event) => setAdProductBrand(event.target.value)} required/>
                        </div>
                        <div class="mb-3 col-md-6">
                            <label for="exampleFormControlTextarea1" class="form-label">Ad Description *</label>
                            <textarea class="form-control" id="ad-description" rows="3" value={adDescription} onChange={(event) => setAdDescription(event.target.value)}  required></textarea>
                        </div>
                        <hr/>
                            <h5 className="my-3">SET A PRICE</h5>
                            <div className="price-input d-flex flex-row input-group mb-3 col-md-6">
                            <label className="mx-2" for="inputMPR">MRP </label>
                            <span class="input-group-text">$</span>
                                <div className="form-floating">
                                    <input type="number" style={{width: "48%"}} class="num-input form-control" id="item-price" min="0" placeholder="Amount" value={itemPrice} onChange={(event) => setItemPrice(event.target.value)} required/>
                                </div>
                            <label className="mx-2" for="inputMPR">Discounted Price </label>
                            <span class="input-group-text">$</span>
                                <div className="form-floating">
                                    <input type="number" style={{width: "48%"}} class="num-input form-control" id="item-price" min="0" placeholder="Amount" value={discountedPrice} onChange={(event) => setDiscountedPrice(event.target.value)} required/>
                                </div>
                            </div>
                        <hr/>
                            <h5 className="my-3">UPLOAD UPTO 4 IMAGES</h5>
                            <div className="image-input">
                                <div class="d-flex flex-row">
                                    <div class="mb-3 mx-1" style={{width:"50%"}}>
                                        <input class="form-control" type="file" id="formFile" required/>
                                    </div>    
                                    <div class="mb-3 mx-2" style={{width:"50%"}}>
                                        <input class="form-control" type="file" id="formFile" required/>
                                    </div>                          
                                </div>
                                <div class="d-flex flex-row">
                                    <div class="mb-3 mx-1" style={{width:"50%"}}>
                                        <input class="form-control" type="file" id="formFile" />
                                    </div>    
                                    <div class="mb-3 mx-1" style={{width:"50%"}}>
                                        <input class="form-control" type="file" id="formFile" />
                                    </div>                           
                                </div>
                            </div>
                        <hr/>
                            <h5 className="my-3">CONFIRM YOUR LOCATION</h5>
                            <div className="address">
                                <div class="form-group my-2">
                                    <label for="inputAddress">Address</label>
                                    <input type="text" class="form-control" id="AddressLine1" placeholder="1234 Main St" value={addressLine1} onChange={(event) => setAddressLine1(event.target.value)}/>
                                </div> 
                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label for="inputCity">City</label>
                                        <input type="text" class="form-control" id="CityName" value={cityName} onChange={(event) => setCityName(event.target.value)}/>
                                    </div>
                                    <div class="form-group col-md-2 my-2">
                                        <label for="inputZip">Zip</label>
                                        <input type="text" class="form-control" id="ZipCode" value={zipCode} onChange={(event) => setZipCode(event.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        <hr/>
                            <h5 className="my-3">REVIEW YOUR DETAILS</h5>
                            <div class="mb-3 col-md-6">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input type="text" class="form-control" id="user-name" value={userName} onChange={(event) => setUserName(event.target.value)}/>
                            </div>
                            <div className="input-group mb-3 col-md-6">
                                <div className="form-floating">
                                    <input type="text" style={{width: "50%"}} class="num-input form-control" id="user-mobile" placeholder="" value={userMobile} onChange={(event) => setUserMobile(event.target.value)} required/>
                                    <label for="floatingInputGroup1">Mobile Phone Number *</label>
                                </div>
                            </div>
                        <hr/>
                        <div className="submit">
                        <button type="submit" onClick={navigate("/")} class="btn btn-outline-secondary">POST AD</button>
                        </div>
                    </form>
                </div>
            </div>
       </>
    )
} 
