import React, { useState } from "react";
import AddItem from "./AddItem";
import Toasty from "./Toasty";

function ShoppingList() {
  const [items, setItems] = useState([]);
  const [toast, setToast] = useState({ type: "", message: "" });
  const [editIndex, setEditIndex] = useState(null);
  const [editedItem, setEditedItem] = useState("");

  const addItem = (itemName) => {
    if (itemName.trim() === "") {
      showToast("error", "Item list cannot be empty");
      return;
    }

    setItems([...items, itemName]);
    showToast("success", `${itemName} added to the list`);
  };

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast({ type: "", message: "" }), 3000);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedItem(items[index]);
  };

  const handleSave = (index) => {
    if (editedItem.trim() === "") {
      showToast("error", "Item list cannot be empty");
      return;
    }

    const updatedItems = [...items];
    updatedItems[index] = editedItem;
    setItems(updatedItems);
    showToast("success", `${editedItem} updated`);
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    showToast("success", `${editedItem} deleted`);
  };

  return (
    <div className="p-4">
      <AddItem addItem={addItem} />
      <ul className="list-disc list-inside mt-4">
        {items.map((item, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedItem}
                  onChange={(e) => setEditedItem(e.target.value)}
                />
                <button
                  className="ml-2 text-black font-semibold border-2 border-black rounded-md p-1 bg-blue-300"
                  onClick={() => handleSave(index)}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                {item}
                <button
                  className="ml-2 text-black font-semibold border-2 border-black rounded-md p-1 bg-yellow-300"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="ml-2 text-black font-semibold border-2 border-black rounded-md p-1 bg-red-400"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>

      {toast.type && <Toasty type={toast.type} message={toast.message} />}
    </div>
  );
}

export default ShoppingList;
