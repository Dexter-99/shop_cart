import React, { Component } from "react";
export class Item extends Component {
  getBadgeColor() {
    return this.props.item.count === 0 ? "warning" : "primary";
  }

  render() {
    return (
      <div className="m-5">
        <span
          className={`badge-${this.getBadgeColor()} badge badge-lg mr-2 align-middle p-3`}
          style={{ fontSize: "24px" }}
        >
          {this.props.item.count}
        </span>
        :
        <button
          onClick={() => this.props.onIncrement(this.props.item)}
          className="btn btn-secondary btn-lg ml-2 mr-3"
          id="inc"
        >
          +
        </button>
        <button
          onClick={this.decrement}
          id="dec"
          className="btn btn-secondary btn-lg mr-4"
        >
          -
        </button>
        <button
          className="btn btn-danger"
          onClick={() => this.props.onDelete(this.props.item.id)}
        >
          delete
        </button>
      </div>
    );
  }
}
export default Item;
