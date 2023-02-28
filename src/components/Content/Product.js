import React, { useContext } from "react";
import { Button, Card, Col } from "react-bootstrap";
import CartContext from "../store/cart-context";
import "./Product.css";

const Product = (props) => {
  const cartCtx=useContext(CartContext)

  const addProductToCartHandler=()=>{
    cartCtx.addProduct({...props,quantity:1})
  }
  return (
    <Col className="col-6">
      <Card className='card'>
        <Card.Title className="title">{props.title}</Card.Title>
        <Card.Img
          style={{ width: "90%", margin: "auto" }}
          variant="top"
          src={props.imageUrl}
        />
        <div className="bottom">
          <Card.Text>{`$${props.price}`}</Card.Text>
          <Button className="btn-sm" onClick={addProductToCartHandler}>Add To Cart</Button>
        </div>
      </Card>
    </Col>
  );
};

export default Product;
