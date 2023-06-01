
import React, { useContext } from "react";
import { Button, Badge } from "react-bootstrap";
import CartContext from "../store/cart-context";
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  const cartCtx=useContext(CartContext)
  const numberOfProductInCart = cartCtx.products.reduce((currNumber, item) => {
    return (currNumber = currNumber + Number(item.quantity));
  }, 0);
  return (
    <Button
      variant="dark"
      className={classes.cartButton}
      onClick={props.onClick}
    >
      Cart
      <Badge bg="secondary ms-2">{numberOfProductInCart}</Badge>
    </Button>
  );
};

export default HeaderCartButton;
