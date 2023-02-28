import React from "react";
import { Container, Row } from "react-bootstrap";
import Product from "./Product";

const AvailableProduct = (props) => {
    const productArr= [
        {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
        ]
  return (
    <React.Fragment>
      <Container>
        <h1 style={{textAlign:'center'}}>Music</h1>
        <Row >
            {productArr.map((item)=>{
               return <Product key={item.title} title={item.title} price={item.price} imageUrl={item.imageUrl} />
            })}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default AvailableProduct;
