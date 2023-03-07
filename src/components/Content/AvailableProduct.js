import React from "react";
import { Container, Row } from "react-bootstrap";
import Product from "./Product";

const AvailableProduct = (props) => {
  const productArr = [
    {
      id: "p1",
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: "p2",
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: "p3",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: "p4",
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  return (
    <React.Fragment>
        <h1 style={{textAlign:'center'}}>Music</h1>
      <Container>
        <Row className="gy-5">
          {productArr.map((item) => {
            return (
              <Product
                key={item.title}
                title={item.title}
                price={item.price}
                id={item.id}
                imageUrl={item.imageUrl}
              />
            );
          })}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default AvailableProduct;
