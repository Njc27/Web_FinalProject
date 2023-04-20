import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import Categories from './categories';
import "./category.css";

const Category = () => {

  const [data, setData] = useState(Categories);
  const navigate = useNavigate();
  const filterResult=(catItem)=> {
    const result=Categories.filter((curData)=>{
      return curData.category===catItem;
    });
    setData(result);

  }

  const handleRegisterClick = () => {
    navigate('/ProductDetails');
  }
  return (
    <>
      
      <div className="container-fluid mx-2">
      <h1>Select your Style</h1>
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
            <div className="btn btn-warning w-100 mb-4" onClick={()=> filterResult('Electronics')}>Electronics</div>
            <div className="btn btn-warning w-100 mb-4" onClick={()=> filterResult('Furnitures')}>Furnitures</div>
            <div className="btn btn-warning w-100 mb-4" onClick={()=> filterResult('Apparels')}>Apparels</div>
            <div className="btn btn-warning w-100 mb-4" onClick={()=> filterResult('Books')}>Books</div>

          </div>
          <div className="col-md-9">
            <div className="row">
              {data.map((values) => {
                const {id,title,price,image,description}= values;
                return (
                  <div className="col-md-4" key={id}>
                    <div className="card">
                      <img src={image} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p>Price ${price}</p>
                        <p className="card-text">{description}</p>
                        <a href="#" onClick={() =>handleRegisterClick()} className="btn btn-primary">Details</a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Category;
