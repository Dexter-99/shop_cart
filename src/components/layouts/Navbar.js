import React, { Component, Fragment } from "react";

export class Navbar extends Component {
  state = {
    order: 1
  };
  // checkOrder = () => {
  //   const { order } = this.state;
  //   return order === 0 ? "zero" : "not-zero";
  // };
  render() {
    const { order } = this.state;
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary text-center ">
          <h1 className="navbar-brand">
            SHOP CART <span className="badge badge-light">{order}</span>
          </h1>
        </nav>
      </Fragment>
    );
  }
}

export default Navbar;
