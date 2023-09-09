import React, { useState } from "react";
import AddItem from "./AddItem";
import Toasty from "./Toasty";

function ShoppingList() {
  const [items, setItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [toast, setToast] = useState({ type: "", message: "" });
  const [editIndex, setEditIndex] = useState(null);
  const [editedItem, setEditedItem] = useState("");

  const addItem = (itemName) => {
    if (itemName.trim() === "") {
      showToast("error", "Item list cannot be empty");
      return;
    }

    const newItem = { name: itemName, checked: false };
    setItems([...items, newItem]);
    showToast("success", `${itemName} added to the list`);
  };

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast({ type: "", message: "" }), 3000);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedItem(items[index].name);
  };

  const handleSave = (index) => {
    if (editedItem.trim() === "") {
      showToast("error", "Item list cannot be empty");
      return;
    }

    const updatedItems = [...items];
    updatedItems[index].name = editedItem;
    setItems(updatedItems);
    showToast("success", `${editedItem} updated`);
    setEditIndex(null);
  };

  const handleToggle = (index) => {
    const updatedItems = [...items];
    const item = updatedItems[index];
    item.checked = !item.checked;

    if (item.checked) {
      updatedItems.splice(index, 1);
      setItems(updatedItems);
      setCheckedItems([...checkedItems, item]);
    } else {
      const uncheckedItems = checkedItems.filter(
        (checkedItem) => checkedItem !== item
      );
      setCheckedItems(uncheckedItems);
    }
  };

  const handleUntick = (index) => {
    const updatedCheckedItems = [...checkedItems];
    const item = updatedCheckedItems[index];
    item.checked = false;

    updatedCheckedItems.splice(index, 1);
    setCheckedItems(updatedCheckedItems);

    setItems([...items, item]);
  };

  const handleDelete = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems.splice(index, 1);
    setCheckedItems(updatedCheckedItems);
  };

  return (
    <div className="p-4">
      <AddItem addItem={addItem} />
      <div className="bg-white rounded-lg p-4 shadow-md">
        <ul className="list-inside mt-4 mb-4">
          {items.map((item, index) => (
            <li key={index} className="mb-2 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleToggle(index)}
                />
                <div className={`ml-2 ${item.checked ? "line-through" : ""}`}>
                  {item.name}
                </div>
              </div>
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editedItem}
                    onChange={(e) => setEditedItem(e.target.value)}
                  />
                  <div className="flex items-center">
                    <button
                      className="ml-2 text-black border-2 border-black font-semibold px-3.5 py-1 rounded-md p-1 bg-blue-300"
                      onClick={() => handleSave(index)}
                    >
                      Save
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {!item.checked && (
                    <div>
                      <button
                        className="ml-2 text-black border-2 border-black font-semibold px-4 py-1 rounded-md p-1 bg-yellow-300"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
      {checkedItems.length > 0 && (
        <div className="bg-white rounded-lg p-4 shadow-md mt-4">
          <p className="text-lg font-semibold">Checked Items</p>
          <ul className="list-inside mt-2">
            {checkedItems.map((item, index) => (
              <li
                key={index}
                className="mb-2 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleUntick(index)}
                  />
                  <div className={`ml-2 ${item.checked ? "line-through" : ""}`}>
                    {item.name}
                  </div>
                </div>
                <div>
                  <button
                    className="ml-2 text-black border-2 border-black font-semibold px-2 py-1 rounded-md p-1 bg-red-400"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {toast.type && <Toasty type={toast.type} message={toast.message} />}
    </div>
  );
}

export default ShoppingList;
