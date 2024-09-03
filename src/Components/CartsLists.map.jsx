import React, { useEffect, useState } from "react";
import CartList from "./CartList";

function CartsListsmap({ cart,removeProduct,setCartAdded }) {
  const [innerCart, setInnerCart] = useState([]);

  useEffect(() => {
    /*
      we used useEffect hook because the setInnerCart call only one time when the  main cart is changed 
      its use stop the callback functions ex: fun() :
      */
    setInnerCart(cart);
  }, [cart]);
  return (
    <>
      {innerCart.map((cart, index) => {
        return (
          <CartList
          setCartAdded={setCartAdded}
          key={index}
          removeProduct={removeProduct}
            index={index}
            cart={cart}
            innerCart={innerCart}
            setInnerCart={setInnerCart}
          />
        );
      })}
      <div className="total-price">
        {innerCart.length >= 1 ? (
          <h2>
            Total Amount : Rs.
            {
              innerCart
                .map((c) => c.price * c.quantity)
                .reduce(
                  (accumulator, currentPrice) => accumulator + currentPrice,
                  0
                )

              // this method does the total value of the array price
              //c.price _*_ c.quantity if quantity  increase decrease then price will be change//
            }
              /-
          </h2>
        ) : (
          <h2>Empty Cart</h2>
        )}
      </div>
    </>
  );
}

export default CartsListsmap;
