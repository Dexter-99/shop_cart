import React, { Component, Fragment } from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Items from "./components/layouts/Items";

export class App extends Component {
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
  handleIncrement = item => {
    let items = [...this.state.items];
    let index = items.indexOf(item);
    items[index] = { ...item };
    items[index].count++;
    this.setState({ items });
  };
  handleDecrement = item => {
    console.log(item);
    let items = [...this.state.items];
    let index = items.indexOf(item);
    items[index] = { ...item };
    if (items[index].count !== 0) {
      items[index].count--;
    }
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
      <Fragment className="App">
        <Navbar value={this.state.items.length} />
        <Items
          items={this.state.items}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          onDecrement={this.handleDecrement}
          onItemIncrement={this.itemIncrement}
        />
      </Fragment>
    );
  }
}

export default App;
