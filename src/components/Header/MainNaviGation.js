import React from "react";
import {Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";
import classes from './MainNaviGation.module.css'

const MainNaviGation=(props)=>{
    return <Navbar bg="dark" variant="dark" className="border-bottom fixed-top">
        <Container fluid>
      <ul className={classes.listul}>
        <li>
          <NavLink to='/Home'>HOME</NavLink>
        </li>
        <li>
          <NavLink to='/'>STORE</NavLink>
        </li>
        <li>
          <NavLink to='/AboutUs'>ABOUT</NavLink>
        </li>
      </ul>
      <HeaderCartButton onClick={props.onClick}/>
      </Container>
  </Navbar>
};

export default MainNaviGation;