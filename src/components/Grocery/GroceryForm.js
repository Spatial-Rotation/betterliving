import React, { useState } from "react";

function GroceryForm() {
  const [item, setItem] = useState({ name: "", quantity: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div>
      <div>
        <label>Item Name</label>
        <input
          type="text"
          id="item"
          value={item.name}
          onChange={(event) => {
            const newItem = event.target.value;
            setItem((prevItem) => ({
              name: newItem,
              quantity: prevItem.quantity,
            }));
            console.log(item);
          }}
        />
      </div>
      <div>
        <label>Quantity</label>
        <input
          type="number"
          id="quantity"
          value={item.quantity}
          onChange={(event) => {
            const newQuant = event.target.value;
            setItem((prevItem) => ({
              name: prevItem.name,
              quantity: newQuant,
            }));
            console.log(item);
          }}
        />
      </div>
      <div>
        <button onClick={submitHandler} />
      </div>
    </div>
  );
}

export default GroceryForm;
