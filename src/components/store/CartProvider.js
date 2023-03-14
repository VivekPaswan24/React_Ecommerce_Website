import axios from "axios";
import React, { useState,useEffect } from "react";
import CartContext from "./cart-context";

const crudURL = "https://crudcrud.com/api/bc7f8d411cb849d6b1c37139df99819f";

async function addItemTocrud(obj) {
  const email = localStorage.getItem("email");
  const updatedEmail = email.replace("@", "").replace(".", "");
  try {
    let response = await axios.post(`${crudURL}/cart${updatedEmail}`, obj);
    alert("Item Added Successfully");
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function putItemToCrud(id, obj) {
  const email = localStorage.getItem("email");
  const updatedEmail = email.replace("@", "").replace(".", "");
  try {
    let response = await axios.put(`${crudURL}/cart${updatedEmail}/${id}`, obj);
    alert("put done");
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function deleteItemFromCrud(id) {
  const email = localStorage.getItem("email");
  const updatedEmail = email.replace("@", "").replace(".", "");
  try {
    const response = await axios.delete(`${crudURL}/cart${updatedEmail}/${id}`);
    alert("delete done");
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function getItemFromCrud(){
  const email = localStorage.getItem("email");
  const updatedEmail = email.replace("@", "").replace(".", "");
  try{
    const response=await axios.get(`${crudURL}/cart${updatedEmail}`)
    return response
  }catch(error){
    console.log(error)
  }
}

const CartProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(()=>{
   async function fetchDta(){
    const response=await getItemFromCrud()
    const totalAmount=response.data.reduce((curAmount,item)=>{
       return curAmount=curAmount+item.price*item.quantity
    },0)
    setTotalAmount(totalAmount)
    setProducts(response.data)
   }
   fetchDta()
  },[])

  const addProductToCartHandler = async (item) => {
    let updatedProducts;
    const existingItemIndex = products.findIndex(
      (ele) => ele.title === item.title
    );
    const existingItem = products[existingItemIndex];
    if (existingItem) {
      const updatedProduct = {
        ...existingItem,
        quantity: Number(existingItem.quantity) + 1,
      };
      const id = existingItem._id;
      updatedProducts = [...products];
      updatedProducts[existingItemIndex] = updatedProduct;
      delete updatedProduct._id
      await putItemToCrud(id, updatedProduct);
      
    } else {
      let response = await addItemTocrud(item);
      updatedProducts = products.concat({ ...item, _id: response.data._id });
    }
    setProducts(updatedProducts);
    setTotalAmount((prevAmount) => {
      prevAmount = prevAmount + item.price;
      return prevAmount;
    });
  };

  const removeProductFromCart = async (item) => {
    let updatedProducts;
    const quantity = Number(item.quantity);
    if (quantity === 1) {
      await deleteItemFromCrud(item._id);
      updatedProducts = products.filter((ele) => ele.title !== item.title);
    } else {
      const existingItemIndex = products.findIndex(
        (ele) => ele.title === item.title
      );
      const existingItem = products[existingItemIndex];
      const id = existingItem._id;
      let updatedProduct = {
        ...existingItem,
        quantity: Number(existingItem.quantity) - 1,
      };
      updatedProducts = [...products];
      updatedProducts[existingItemIndex] = updatedProduct;
      delete updatedProduct._id
      await putItemToCrud(id, updatedProduct);
    }
    setProducts(updatedProducts);
    setTotalAmount((prevAmount) => {
      prevAmount = prevAmount - item.price;
      return prevAmount;
    });
  };

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
