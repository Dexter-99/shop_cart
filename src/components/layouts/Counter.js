import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
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
  handleIncrement = counter => {
    console.log(counter.id);
    let items = [...this.state.items];
    let index = items.indexOf(counter);
    items[index] = { ...counter };
    items[index].count++;
    this.setState({ items });
  };
  handleDelete = itemId => {
    console.log("handled event");
    const items = this.state.items.filter(c => c.id !== itemId);
    this.setState({ items: items });
  };
  handleReset = () => {
    console.log("reset");
    let items = this.state.items.map(item => {
      item.count = 0;
      return item;
    });
    this.setState({ items });
  };
  render() {
    return (
      <div>
        <Navbar value={this.state.i} />
        <div className=" ml-4 mt-4">
          <button className="btn btn-dark mr-4" onClick={this.itemIncrement}>
            Add Item +
          </button>
          <button className="btn btn-dark" onClick={this.handleReset}>
            Reset
          </button>
        </div>
        {this.state.items.map(item => (
          <Item
            key={item.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            item={item}
          />
        ))}
      </div>
    );
  }
}

export default Counter;
