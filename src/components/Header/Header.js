import React from "react";
import HeaderTitle from "./HeaderTitle";
import MainNaviGation from "./MainNaviGation";

const Header = (props) => {
  return (
    <React.Fragment>
      <MainNaviGation onClick={props.onClick}/>
      <HeaderTitle />
    </React.Fragment>
  );
};

export default Header;
