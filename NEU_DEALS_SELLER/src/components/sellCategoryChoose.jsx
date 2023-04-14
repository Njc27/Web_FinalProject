import react, { useState } from "react"
import { useNavigate } from "react-router-dom";
import Nav from "./nav"
import PageTitle from "./sellTitle"
export default function(){
    
    const categories=[
        {
            categoryName:'Furniture',
            categoryItems :['Table','Chair','Closet','BedFrame','Matress','Shoe Rack','Lamps'],
        },
        {
            categoryName:'Electronics',
            categoryItems: ['Laptop','Mobile']
        }
    ];
    
    const [showitems,setshowitems]=useState(false)
    const [items,setitems]=useState([])
    const navigate=useNavigate()

    const handleClick = (event) =>{
        setshowitems(true);
        for(let item of categories){
            if (item.categoryName==event.target.id){
                setitems(item.categoryItems);
            }
        }
    }

    const getFormPage = (event) =>{
        const sellingitem=event.target.id;
        navigate(`/sell/form/${sellingitem}`)
    }

    return(
        <>
            <Nav/>
            <PageTitle/>
            <div className="mt-4 container border" style={{width : "60%"}}>
                <h5 className="my-3 mx-2" style={{textAlign:"left"}}>CHOOSE YOUR CATEGORY</h5>
                <div className="category border m-2 d-flex flex-row"style={{height:"500px"}}>
                    <div className="col-md-6">
                        <h5 className="my-3">Categories</h5>
                        {categories.map(item => <div className="border" style={{height:"50px"}}><button className="btn btn-outline-secondary" id={item.categoryName} style={{width:"100%",height:"100%"}} onClick={handleClick}>{item.categoryName}</button></div>)}
                    </div>
                    <div className="col-md-6">
                        <h5 className="my-3">Items</h5>
                        {showitems && items.map(item => <div className="border" style={{height:"50px"}} ><button className="btn btn-outline-secondary" id={item} style={{width:"100%",height:"100%"}} onClick={getFormPage}>{item}</button></div>)}
                    </div>
                </div>
            </div>
        </>
    )
}