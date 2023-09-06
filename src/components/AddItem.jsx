import React, { useState } from "react";

function AddItem({ addItem }) {
  const [itemName, setItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(itemName);
    setItemName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter item name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        className="p-2 border-2 border-black rounded-md mr-2"
      />
      <button
        type="submit"
        className="bg-green-400 border-2 border-black text-black font-semibold px-4 py-2 rounded-md hover:bg-green-600"
      >
        Add Item
      </button>
    </form>
  );
}

export default AddItem;
