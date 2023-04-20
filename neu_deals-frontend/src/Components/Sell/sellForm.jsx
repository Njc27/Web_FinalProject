import react from "react"
import { useState,useEffect } from "react";
import { Navigate, useNavigate, useParams} from "react-router-dom"
import "./sellForm.css"
import { uploadImage } from "../../Services/imageService";
import { useDispatch } from 'react-redux';
import { uploadProduct } from "../../Services/productService";

export default function(){

    
    const {item}=useParams();
    const navigate=useNavigate();
    const dispatch = useDispatch();


  

    
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
    const [image1,setImage1] = useState('');
    const [image2,setImage2] = useState('');
    const [image3,setImage3] = useState('');
    const [image4,setImage4] = useState('');

    useEffect(() =>{
        if(sessionStorage.getItem("userId") !==undefined){
          let obj = JSON.parse(sessionStorage.getItem("userId"));
          if(obj?._id){
            setUserName(obj?._id);
          }
        }
    },[sessionStorage.getItem("userId")]);




    const handleSubmit = (event) => {
        event.preventDefault();
        let body = {
            prodName : adTitle,
            brandName : adProductBrand,
            categoryName:item?.category,
            desc:adDescription,
            actualPrice:itemPrice,
            discountePrice:discountedPrice,
            image1:image1,
            image2:image2,
            image3:image3,
            image4:image4,
            addressLine:addressLine1,
            cityName:cityName,
            zipCode:zipCode,
            userId : userName
        }
        uploadProduct(body).then(result =>{
            console.log(result)

        })


    };

    const handleImageUpload = (e,imageNumber) =>{
        const data = new FormData() 
        data.append('image', e.target.files[0]);
        uploadImage(data).then(result =>{
            switch(imageNumber){
                case 1:
                    setImage1(result)
                case 2:
                    setImage2(result)
                case 3:
                    setImage3(result)
                case 4:
                    setImage4(result)
            }
        })
        
    }


    const handleClick = (event)=>{
        navigate("/sell")
    }

    return(
       <>
            <div className="external-container container border" style={{width:"60%"}}>  
                <div className="my-3 mx-2" style={{textAlign:"left"}}>
                    <h5>SELECTED CATEGORY : {item}</h5>
                    <p style={{textDecoration:"underline"}} onClick={handleClick}>Back</p>
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
                                        <input class="form-control" type="file" id="formFile" onChange={(e)=>handleImageUpload(e)}/>
                                    </div>    
                                    <div class="mb-3 mx-2" style={{width:"50%"}}>
                                        <input class="form-control" type="file" id="formFile" required onChange={(e)=>handleImageUpload(e)}/>
                                    </div>                          
                                </div>
                                <div class="d-flex flex-row">
                                    <div class="mb-3 mx-1" style={{width:"50%"}}>
                                        <input class="form-control" type="file" id="formFile"  onChange={(e)=>handleImageUpload(e)}/>
                                    </div>    
                                    <div class="mb-3 mx-1" style={{width:"50%"}}>
                                        <input class="form-control" type="file" id="formFile"  onChange={(e)=>handleImageUpload(e)}/>
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
