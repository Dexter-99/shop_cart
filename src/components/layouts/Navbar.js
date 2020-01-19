import React, { Component, Fragment } from "react";
export class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary text-center ">
          <h1 className="navbar-brand">
            SHOP CART{" "}
            <span className="badge badge-light">{this.props.value}</span>
          </h1>
        </nav>
      </Fragment>
    );
  }
}

export default Navbar;
