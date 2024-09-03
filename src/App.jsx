import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import CartsListsmap from "./Components/CartsLists.map";
import Footer from "./Components/Footer";

export default function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [product, setProduct] = useState([
    {
      id: crypto.randomUUID(),
      url: "https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70",
      name: "TRQ White Shoes",
      category: "Shoes",
      seller: "AMZ Seller Ghz",
      price: 1999,
    },
    {
      id: crypto.randomUUID(),
      url: "https://cdn.khadims.com/image/tr:e-sharpen-01,h-822,w-940,cm-pad_resize/data/khadims/07nov2023/53405753416_1.jpg",
      name: "LOREM Watch Black",
      category: "Watches",
      seller: "Watch Ltd Siyana",
      price: 2599,
    },
    {
      id: crypto.randomUUID(),
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU",
      name: "AMZ Laptop 8GB RAM",
      category: "Laptops",
      seller: "Delhi Laptops",
      price: 50000,
    },
    {
      id: crypto.randomUUID(),
      url: "https://cdn.homemate.co.in/wp-content/uploads/2019/04/Smart-Camera-Big.png",
      name: "Security Camera",
      category: "CCTV",
      seller: "Camron LTD",
      price: 4000,
    },
    {
      id: crypto.randomUUID(),
      url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/41-nc-alum-pink-sport-loop-light-pink-s9?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1693282098176",
      name: "Watch Pink",
      category: "Watches",
      seller: "Watch Ltd",
      price: 2000,
    },
    {
      id: crypto.randomUUID(),
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU",
      name: "Cup red Color",
      category: "Cup",
      seller: "ABS Ltd",
      price: 100,
    },

    {
      id: crypto.randomUUID(),
      url: "https://m.media-amazon.com/images/I/711wsjBtWeL._SX679_.jpg",
      name: "IPhone 12",
      category: "Mobile",
      seller: "Rohan Patil",
      price: 54999,
    },

    {
      id: crypto.randomUUID(),
      url: "https://m.media-amazon.com/images/I/71RwB1Km-EL._SX679_.jpg",
      name: "ASUS TUF 15 Laptop",
      category: "Laptop",
      seller: "Rohan Patil",
      price: 64999,
    },

    {
      id: crypto.randomUUID(),
      url: "https://m.media-amazon.com/images/I/81Os1SDWpcL._SX679_.jpg",
      name: "IPhone 15 Pro Max",
      category: "Mobile",
      seller: "Rohan Patil",
      price: 145499,
    },
  ]);
  const [searched, setSearched] = useState(product); // we copy the product array for searching and filtering
  // we dont change it. it also used to reseting the product after search

  const removeProduct = (UserID) => {
    //removed Item Cart
    const newCart = cart.filter((c) => c.id !== UserID);
    setCart(newCart);
  };

  const addCart = (singleProduct) => {
    setCart([...cart, { ...singleProduct, quantity: 1 }]);
  };

  const handleSearch = (name) => {
    if (name === "") {
      setProduct(product);
    }
    const searchVal = searched.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );
    setProduct(searchVal);
  };

  return (
    <>
      <Header
        product={searched}
        handleSearch={handleSearch}
        setProduct={setProduct}
        setShowCart={setShowCart}
        count={cart.length}

      />
      {showCart ? (
        <CartsListsmap
        
          removeProduct={removeProduct}
          cart={cart}
        />
      ) : (
        <ProductList 
       
        addCart={addCart} 
        product={product} />
      )}
      <Footer/>
    </>
  );
}
