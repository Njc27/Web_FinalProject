import react, { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./sell.css"
export default function(){
    
    const categories=[
        {
            categoryName:'Furniture',
            categoryItems :['Table','Chair','Closet','BedFrame','Matress','Shoe Rack','Lamps'],
        },
        {
            categoryName:'Electronics',
            categoryItems: ['Laptop','Mobile','Headphone']
        },
        {
            categoryName:'Books',
            categoryItems:["Academics Books","Casual Books","Notes"] 
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
            <div className="external-container my-4 container" >
                <h5 className="my-3 mx-2" style={{textAlign:"left"}}>CHOOSE YOUR CATEGORY</h5>
                <div className="category m-2 d-flex flex-row"style={{height:"500px"}}>
                    <div className="col-md-6">
                        <h5 className="my-3">CATEGORIES</h5>
                        {categories.map(item => <div className="my-1" style={{height:"50px"}}><button className="btn btn-outline-secondary" id={item.categoryName} style={{width:"95%",height:"100%"}} onClick={handleClick}>{item.categoryName}</button></div>)}
                    </div>
                    <div className="col-md-6">
                        <h5 className="my-3">ITEMS</h5>
                        {showitems && items.map(item => <div className="my-1" style={{height:"50px"}} ><button className="btn btn-outline-secondary" id={item} style={{width:"95%",height:"100%"}} onClick={getFormPage}>{item}</button></div>)}
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </>
    )
}