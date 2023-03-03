import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from "./MainNaviGation.module.css";

const MainNaviGation = (props) => {
  return (
      <Navbar bg="dark" variant="dark" className="border-bottom fixed-top" style={{height:'8vh'}}>
        <Container fluid>
          <ul className={classes.listul}>
            <li>
              <NavLink to="/home">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/store">STORE</NavLink>
            </li>
            <li>
              <NavLink to="/aboutUs">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/contactUs">CONTACT US</NavLink>
            </li>
          </ul>
        </Container>
      </Navbar>
  );
};

export default MainNaviGation;
