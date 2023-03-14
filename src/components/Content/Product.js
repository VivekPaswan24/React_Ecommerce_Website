import React, { useContext } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../store/auth-context";
import CartContext from "../store/cart-context";
import "./Product.css";

const Product = (props) => {
  const cartCtx=useContext(CartContext)
  const authctx=useContext(AuthContext);
  let email=authctx.emailId
  let updatedEmail;
  if(email){
     updatedEmail=email.replace('@','').replace('.','');
  }

  const addProductToCartHandler=()=>{
    cartCtx.addProduct({...props,quantity:1},updatedEmail)
  }
  return (
    <Col className="col-6">
      <Card className='card'>
        <Card.Title className="title"><Link to={`/store/${props.id}`}>{props.title}</Link></Card.Title>
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
