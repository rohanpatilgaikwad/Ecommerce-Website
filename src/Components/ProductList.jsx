import React from 'react'
import Product from './Product'

function ProductList({product,addCart,setCartAdded,cartAdded}) {
  return <>



  <div className="container">
  <div className="product-con" >

  {product.map((p,i)=>{
       return<>
    <Product  cartAdded={cartAdded} setCartAdded={setCartAdded} key={i} product={p} addCart={addCart} />
       </>   
        })}
       
  </div>
  

  </div>
 
    </>
}

export default ProductList