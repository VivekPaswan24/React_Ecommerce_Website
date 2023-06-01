import axios from "axios";
import React, { useEffect, useState } from "react";
import CartContext from "./cart-context";

const crudURL = "https://crudcrud.com/api/8a5df6e96151494a911bcb44f427fde9";

async function addItemTocrud(obj) {
  const email = localStorage.getItem("email");
  const updatedEmail = email.replace("@", "").replace(".", "");
  try {
    let response = await axios.post(`${crudURL}/cart${updatedEmail}`, obj);
    alert("Item Added Successfully");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function putItemToCrud(id, obj) {
  const email = localStorage.getItem("email");
  const updatedEmail = email.replace("@", "").replace(".", "");
  try {
    await axios.put(`${crudURL}/cart${updatedEmail}/${id}`, obj);
    alert("put done");
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

async function getItemFromCrud() {
  const email = localStorage.getItem("email");
  const updatedEmail = email.replace("@", "").replace(".", "");
  try {
    const response = await axios.get(`${crudURL}/cart${updatedEmail}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const CartProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    async function fetchDta() {
      const data = await getItemFromCrud();
      const totalAmount = data.reduce((curAmount, item) => {
        return (curAmount = curAmount + item.price * item.quantity);
      }, 0);
      setProducts(data);
      setTotalAmount(totalAmount);
    }
    fetchDta();
  }, []);

  const addProductToCartHandler = async (item) => {
    const existingItemIndex = products.findIndex(
      (ele) => ele.title === item.title
    );
    const existingItem = products[existingItemIndex];
    if (existingItem) {
      const id = existingItem._id;
      const updatedProduct = {
        ...existingItem,
        quantity: Number(existingItem.quantity) + 1,
      };
      delete updatedProduct._id;
      await putItemToCrud(id, updatedProduct);
      setProducts((prevProducts) => {
        const updatedProducts = [...prevProducts];
        updatedProducts[existingItemIndex] = {
          ...updatedProduct,
          _id: id,
        };
        return updatedProducts;
      });
    } else {
      const data = await addItemTocrud(item);
      setProducts((prevProducts) => {
        const updatedProducts = prevProducts.concat(data);
        return updatedProducts;
      });
    }
    setTotalAmount((prevAmount) => {
      return (prevAmount = prevAmount + item.price);
    });
  };
  const removeProductFromCart = async (item, id) => {
    console.log(id);
    const quantity = Number(item.quantity);
    if (quantity === 1) {
      await deleteItemFromCrud(id);
      setProducts((prevProducts) => {
        const updatedProducts = prevProducts.filter(
          (ele) => ele.id !== item.id
        );
        return updatedProducts;
      });
    } else {
      const existingItemIndex = products.findIndex((ele) => ele.id === item.id);
      const existingItem = products[existingItemIndex];
      let updatedProduct = {
        ...existingItem,
        quantity: Number(existingItem.quantity) - 1,
      };
      delete updatedProduct._id;
      await putItemToCrud(id, updatedProduct);
      setProducts((prevProducts) => {
        const updatedProducts = [...prevProducts];
        updatedProducts[existingItemIndex] = {
          ...updatedProduct,
          _id: id,
        };
        return updatedProducts;
      });
    }
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
