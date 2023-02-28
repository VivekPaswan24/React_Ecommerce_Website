import React, { useContext } from "react";
import { Button, Badge } from "react-bootstrap";
import CartContext from "../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfProductInCart = cartCtx.products.reduce((currNumber, item) => {
    return (currNumber = currNumber + Number(item.quantity));
  }, 0);
  return (
    <Button
      variant="dark"
      className="border border-3 border-info"
      onClick={props.onClick}
    >
      Cart
      <Badge bg="secondary ms-2">{numberOfProductInCart}</Badge>
    </Button>
  );
};

export default HeaderCartButton;
