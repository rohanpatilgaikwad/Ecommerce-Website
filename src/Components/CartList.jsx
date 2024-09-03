import React from "react";

function CartList({ cart, index, setInnerCart, innerCart,removeProduct,setCartAdded }) {
  console.log(cart)
  return (
    <>
      <div className="carts">
        <div className="cart">
          <div className="cart-item 1">
            <div className="cart-img">
              <img src={cart.url} alt="Product" />
            </div>
            <p>{cart.name}</p>
          </div>

          <div className="cart-item 2">
            <button
              onClick={() => {
                const newCart = innerCart.map((productOBJ, i) => {
                  return index === i
                    ? { ...productOBJ, quantity: productOBJ.quantity - 1 }
                    : productOBJ;
                });

                setInnerCart(newCart);
              }}
              disabled={cart.quantity === 1}
            >
              -
            </button>

            {cart.quantity}

            <button
              onClick={() => {
                const newCart = innerCart.map((product, i) => {
                  return index === i
                    ? { ...product, quantity: product.quantity + 1 }
                    : product;
                });
                /**  index===i this we do for track the product for increaing and decreaing quantity 
          Self Explained:
          in simple langauge when we click increamet decreament quantity btn
          then how the program will detact.  which item have the user clicked  
          thats why we match the index to detact the item       
          */
                setInnerCart(newCart);
              }}
            >
              +
            </button>

            <p className="cart-price">Rs.{cart.price * cart.quantity}</p>
            
          </div>
          <button className="Remove" onClick={()=>removeProduct(cart.id)} style={{width : "6rem"}}>Remove</button>
        </div>
       
      </div>
    </>
  );
}

export default CartList;
