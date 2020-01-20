import React from "react";
const Item = props => {
  const getBadgeColor = () => {
    return props.item.count === 0 ? "warning" : "primary";
  };
  return (
    <div className="m-5">
      <span
        className={`badge-${getBadgeColor()} badge badge-lg mr-2 align-middle p-3`}
        style={{ fontSize: "24px" }}
      >
        {props.item.count}
      </span>
      :
      <button
        onClick={() => props.onIncrement(props.item)}
        className="btn btn-secondary btn-lg ml-2 mr-3"
        id="inc"
      >
        +
      </button>
      <button
        onClick={() => props.onDecrement(props.item)}
        id="dec"
        className="btn btn-secondary btn-lg mr-4"
      >
        -
      </button>
      <button
        className="btn btn-danger"
        onClick={() => props.onDelete(props.item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default Item;
