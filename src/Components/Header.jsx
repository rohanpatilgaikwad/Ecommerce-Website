import React, { useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function Header({ count, setShowCart,handleSearch ,setProduct,product}) {
  const searchVal = useRef()
  const onSearch=()=>{
  handleSearch(searchVal.current.value)
  }
  return (
    <>
      <header>
        <h1 onClick={() =>{ setProduct(product);  setShowCart(false);  }}>Shopping-Cart</h1>

      <div className="input-con">
      <input type="text" className="search" ref={searchVal} placeholder="Search Product..."/>
      <button
      onClick={()=> onSearch()}>
        <FaSearch/>
      </button>
      </div>
       

        <a href="" onClick={(e) => e.preventDefault()}>
          <FaShoppingCart
            onClick={() => setShowCart(true)}
            className="cart-icon"
          />

          <sup>{count}</sup>
        </a>
      </header>
    </>
  );
}

export default Header;
