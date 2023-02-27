import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./Product.css";

const Product = (props) => {
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
          <Button>Add To Cart</Button>
        </div>
      </Card>
    </Col>
  );
};

export default Product;
