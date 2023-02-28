import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import classes from "./Home.module.css";

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
    <>
      <div className={classes.title}>
        <div>
          <h1 className={classes.text}>The Generics</h1>
        </div>
        <div>
          <button type="click" className={classes.btn}>
            Get Our Latest Album
          </button>
        </div>
      </div>
      <Container className="mt-5">
        <h1 style={{ textAlign: "center" }}>TOURS</h1>
        <Container className={classes.body}>
          {tourDetaisl.map((ele) => {
            return (
              <Row className="border-bottom" key={ele.date}>
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
                  <Button variant="primary" size="md" active>
                    BUY TICKETS
                  </Button>
                </Col>
              </Row>
            );
          })}
        </Container>
      </Container>
    </>
  );
};

export default Home;
