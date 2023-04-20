import React from 'react'
import classes from'./ProductDetails.css'
import Table1 from '../../Assests/Table1.jpg'
import Table2 from '../../Assests/Table2.jpg'
import ProductData from './ProductData'

const ProductDetails = () => {
  return (
    <div className="MainContainer">
        <div className="ProductPreview">
            <img src={Table1} alt='Product Preview'/>
        </div>
       <div className="ProductData">
        <h1 className="ProductTitle"> {ProductData.title} </h1>
        <p className='ProductDescription'> {ProductData.description} </p>

        <div>
            <img className='ProductImage' src={Table2}></img>
            <img className='ProductImage' src={Table2}></img>
            <img className='ProductImage' src={Table2}></img>
            <img className='ProductImage' src={Table2}></img>
        </div>

        <div>
           <button className='AddCart'>Add To Cart</button>
        </div>

       </div>
      </div>
  )
}

export default ProductDetails