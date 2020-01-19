import React from "react";
import Navbar from "./components/layouts/Navbar";
import "./App.css";
import Item from "./components/items/Item";
import Counter from "./components/layouts/Counter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Counter />
    </div>
  );
}

export default App;
