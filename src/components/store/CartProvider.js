import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

    const addProductToCartHandler=(item)=>{
        setTotalAmount((prevAmount)=>{
            prevAmount=prevAmount+item.price
            return prevAmount
        })
        setProducts((prevProducts)=>{
            let updatedProducts;
           const existingItemIndex=prevProducts.findIndex((ele)=>ele.title===item.title)
           const existingItem=prevProducts[existingItemIndex]
           if(existingItem){
            const updatedProduct={
                ...existingItem,
                quantity:Number(existingItem.quantity)+1
            }
            updatedProducts=[...prevProducts]
            updatedProducts[existingItemIndex]=updatedProduct
           }else{
            updatedProducts=prevProducts.concat(item)
           }
           return updatedProducts;
        })
    }

    const removeProductFromCart=(item)=>{
      setTotalAmount((prevAmount)=>{
        prevAmount=prevAmount-item.price
        return prevAmount
      })

      setProducts((prevProducts)=>{
        let updatedProducts
        const quantity=Number(item.quantity)
        if(quantity===1){
          updatedProducts=prevProducts.filter((ele)=>ele.title!==item.title)
        }else{
          const existingItemIndex=prevProducts.findIndex((ele)=>ele.title===item.title)
          const existingItem=prevProducts[existingItemIndex]
          let updatedProduct={
            ...existingItem,
            quantity:Number(existingItem.quantity)-1
          }
          updatedProducts=[...prevProducts]
          updatedProducts[existingItemIndex]=updatedProduct
        }
        return updatedProducts;
      })
    }

  const cartContext = {
    products: products,
    totalAmount: totalAmount,
    addProduct: addProductToCartHandler,
    removeProduct: removeProductFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
