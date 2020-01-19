import React, { Component, Fragment } from "react";
import Item from "../items/Item";
export class Counter extends Component {
  state = {
    i: 0,
    items: []
  };
  itemIncrement = () => {
    this.setState({ i: this.state.i + 1 });
    let obj = { id: this.state.i, count: 0 };
    this.setState({
      items: [...this.state.items, obj]
    });
  };
  handleDelete = itemId => {
    console.log("handled event");
    const items = this.state.items.filter(c => c.id !== itemId);
    this.setState({ i: this.state.i - 1, items: items });
  };
  render() {
    return (
      <div>
        <button className="btn btn-dark ml-4 mt-4" onClick={this.itemIncrement}>
          Add Item +
        </button>
        {this.state.items.map(item => (
          <Item
            key={item.id}
            onDelete={this.handleDelete}
            id={item.id}
            value={item.count}
          />
        ))}
      </div>
    );
  }
}

export default Counter;
