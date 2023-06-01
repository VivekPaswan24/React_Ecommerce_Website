import React, { useContext } from "react";

import { Navbar, Container, Button, } from "react-bootstrap";

import { NavLink} from "react-router-dom";
import AuthContext from "../store/auth-context";
import classes from "./MainNaviGation.module.css";

const MainNaviGation = (props) => {

  const logutHandler=()=>{
    authCtx.logout()
  }

  const authCtx=useContext(AuthContext);
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
          {authCtx.isLoggedIn && <li>
            <Button onClick={logutHandler}>LOGOUT</Button>
          </li>}
        </ul>
      </Container>
    </Navbar>
  );
};

export default MainNaviGation;
