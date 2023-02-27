import React from "react";
import { Button, Badge } from "react-bootstrap";
const HeaderCartButton = () => {
  return (
    <Button variant="dark" className="border border-3 border-info">
      Cart
      <Badge bg="secondary ms-2">0</Badge>
    </Button>
  );
};

export default HeaderCartButton;
