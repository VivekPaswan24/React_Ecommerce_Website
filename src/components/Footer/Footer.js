import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container fluid style={{ backgroundColor: "#56CCF2",height:'20vh',marginTop:'10vh' }}>
        <div>
          <h1 style={{color:'white'}}>The Generics</h1>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
