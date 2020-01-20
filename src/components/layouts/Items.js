import React from "react";
import Item from "../items/Item";
const Counter = props => {
  return (
    <div>
      <div className=" ml-4 mt-4">
        <button className="btn btn-dark mr-4" onClick={props.onItemIncrement}>
          Add Item +
        </button>
        <button className="btn btn-dark" onClick={props.onReset}>
          Reset
        </button>
      </div>
      {props.items.map(item => (
        <Item
          key={item.id}
          onDelete={props.onDelete}
          onIncrement={props.onIncrement}
          onDecrement={props.onDecrement}
          item={item}
        />
      ))}
    </div>
  );
};

export default Counter;
