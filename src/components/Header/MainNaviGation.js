import React from "react";

import { Navbar, Container, } from "react-bootstrap";

import { NavLink} from "react-router-dom";
import classes from "./MainNaviGation.module.css";

const MainNaviGation = (props) => {

  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="border-bottom fixed-top"
      style={{ height: "8vh" }}
    >
      <Container fluid>
        <ul className={classes.listul}>
          <li>
            <NavLink activeClassName={classes.active} to="/home">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/store"  activeClassName={classes.active}  >
              STORE
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/aboutUs">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/contactUs">
              CONTACT US
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/login">
              LOGIN
            </NavLink>
          </li>
        </ul>
      </Container>
    </Navbar>
  );
};

export default MainNaviGation;
