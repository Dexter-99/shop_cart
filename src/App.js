import React, { Fragment, useState } from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Items from "./components/layouts/Items";

const App = () => {
  const [i, setId] = useState(0);
  const [items, setItems] = useState([]);

  const itemIncrement = () => {
    setId(i + 1);
    let obj = { id: i, count: 0 };
    setItems(items => [...items, obj]);
    console.log(items);
  };
  const handleIncrement = item => {
    let updateItems = [...items];
    let index = updateItems.indexOf(item);
    updateItems[index] = { ...item };
    updateItems[index].count++;
    setItems(updateItems);
  };
  const handleDecrement = item => {
    console.log(item);
    let updateItems = [...items];
    let index = updateItems.indexOf(item);
    updateItems[index] = { ...item };
    if (updateItems[index].count !== 0) {
      updateItems[index].count--;
    }
    setItems(updateItems);
  };
  const handleDelete = itemId => {
    console.log("handled event");
    const updateItems = items.filter(c => c.id !== itemId);
    setItems(updateItems);
  };
  const handleReset = () => {
    console.log("reset");
    let updateItems = items.map(item => {
      item.count = 0;
      return item;
    });
    setItems(updateItems);
  };
  return (
    <Fragment>
      <Navbar value={items.length} />
      <Items
        items={items}
        onReset={handleReset}
        onIncrement={handleIncrement}
        onDelete={handleDelete}
        onDecrement={handleDecrement}
        onItemIncrement={itemIncrement}
      />
    </Fragment>
  );
};

export default App;
