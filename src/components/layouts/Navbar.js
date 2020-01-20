import React, { Fragment } from "react";
const Navbar = props => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary text-center ">
        <h1 className="navbar-brand">
          SHOP CART <span className="badge badge-light">{props.value}</span>
        </h1>
      </nav>
    </Fragment>
  );
};

export default Navbar;
