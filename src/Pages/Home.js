import React from "react";
import {Button, Row,Col,Container} from "react-bootstrap";
import HeaderTitle from "../components/Header/HeaderTitle";

const tourDetaisl = [
  {
    date: "JUL16",
    title: "DETROIT, MI",
    des: "DTE ENERGY MUSIC THEATRE",
  },
  {
    date: "JUL19",
    title: "TORONTO,ON",
    des: "BUDWEISER STAGE",
  },
  {
    date: "JUL22",
    title: "BRISTOW, VA",
    des: "JIGGY LUBE LIVE",
  },
  {
    date: "JUL 29",
    title: "PHOENIX, AZ",
    des: "AK-CHIN PAVILION",
  },
  {
    date: "AUG 2",
    title: "LAS VEGAS, NV",
    des: "T-MOBILE ARENA",
  },
  {
    date: "AUG 7",
    title: "CONCORD, CA",
    des: "CONCORD PAVILION",
  },
];

const Home = () => {
  return (
    <React.Fragment>
      <HeaderTitle home={true}/>
      <Container>
        <div>
          <h1 style={{textAlign:'center'}}>TOURS</h1>
        </div>
        <Container className="ms-5 mx-5">
        {
          tourDetaisl.map((ele)=>{
           return (
            <Row className="mt-2" key={ele.date}>
              <Col>
              <span>{ele.date}</span>
              </Col>
              <Col>
              <span>{ele.title}</span>
              </Col>
              <Col>
              <span>{ele.des}</span>
              </Col>
              <Col>
              <span><Button>BUY TICKETS</Button></span>
              </Col>
            </Row>
           )
          })
        }
       </Container>
      </Container>
    </React.Fragment>
  )
};

export default Home;
