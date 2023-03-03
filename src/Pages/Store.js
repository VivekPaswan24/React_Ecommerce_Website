import React from "react";
import Header from "../components/Header/Header";
import AvailableProduct from "../components/Content/AvailableProduct";
import Cart from "../components/Cart/Cart";
import { useState } from "react";
import CartProvider from "../components/store/CartProvider";
import HeaderCartButton from "../components/Header/HeaderCartButton";

const StorePage = () => {
  const [showCart, setShowCart] = useState(false);
  const cartShowHandler = () => {
    setShowCart(true);
  };
  const cartHideHandler=()=>{
    setShowCart(false)
  }
  return (
    <CartProvider>
      <Header/>
      <HeaderCartButton onClick={cartShowHandler} />
      <AvailableProduct />
      {showCart && <Cart onClick={cartHideHandler} />}
    </CartProvider>
  );
};

export default StorePage;
