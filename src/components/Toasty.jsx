import React from "react";

const Toasty = ({ message, type }) => {
  return (
    <div
      className={`${
        type === "success" ? "bg-green-500" : "bg-red-500"
      } fixed bottom-4 right-4 text-white p-2 rounded-md shadow-md`}
    >
      {message}
    </div>
  );
};

export default Toasty;
