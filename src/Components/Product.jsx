import React from 'react'

   
    function Product({product,addCart}) {



  return (
    <>
     <div className="product">
            <div className="img-con">
                <img src={product.url} alt="" />
            </div>
            <div className="product-info">
            <p className='productname'>{product.name}</p>
            <p className='productseller'>{product.seller}</p>
            {/* <p className='productseller'>{product.category}</p>   */}
            <p className='price'>Rs {product.price} /-</p>
            <button  className='cartbtn' onClick={()=>{addCart(product); }}>Add To Cart</button>

            {/* {Fullproduct.map((_i)=>{
                  <button disabled={cartAdded===true} className='cartbtn' onClick={()=>{
               
                  }}>Add To Cart</button>
                })} */}
            
            </div>
            
        </div>
    </>
  )
}

export default Product