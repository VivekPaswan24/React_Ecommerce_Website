import React, { useContext } from "react";
import { Card, Container, Button, Figure, Row,Col } from "react-bootstrap";
import CartContext from "../store/cart-context";
import "./Cart.css";

const Cart = (props) => {
  const cartCtx=useContext(CartContext);

  const productRemoveHandler=(item,id)=>{
    cartCtx.removeProduct(item,id)
  }

  return (
    <div className="cart">
      <Card border="light" style={{ width: "28rem" }}>
        {/* <Container className="d-flex justify-content-between"> */}
        <Card.Header>CART</Card.Header>
        
        {/* </Container> */}
        <Card.Body>
          <Container fluid id='productList'>
            <Row>
                <Col className="border-bottom">Title</Col>
                <Col className="border-bottom">Price</Col>
                <Col className="border-bottom">Quantity</Col>
            </Row>
            {
                cartCtx.products.map((item)=>{
                    return <Row key={item.title} className="border-bottom">
                        <Col className="col-2">
                        <Figure>
                            <Figure.Image height={50} width={50} src={item.imageUrl} alt='color' />
                        </Figure>
                        </Col>
                        <Col className="col-2">
                        <span>{item.title}</span>
                        </Col>
                        <Col className="col-4">
                        <span>{item.price}</span>
                        </Col>
                        <Col className="col-2">
                        <span>x{item.quantity}</span>
                        </Col>
                        <Col className="col-2">
                       <Button variant="danger" className="btn-sm" onClick={productRemoveHandler.bind(null,item,item._id)}>Remove</Button>
                        </Col>
                    </Row>
                })
            }
          </Container>
        </Card.Body>
        <Container className='cart-items'>
          <span>Total Amount $ {cartCtx.totalAmount}</span>
          <Button variant="dark">PURCHASE</Button>
          <Button variant="outline-danger" onClick={props.onClick}>CLOSE</Button>
        </Container>
      </Card>
    </div>
  );
};

export default Cart;
