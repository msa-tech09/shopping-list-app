import React from "react";
import "./App.css";
import ShoppingList from "./components/ShoppingList";

function App() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-2xl">
      <header className="App-header">
        <h1 className="p-4 font-bold text-4xl md:text-5xl">
          Shopping List App
        </h1>
      </header>
      <main>
        <ShoppingList />
      </main>
    </div>
  );
}

export default App;
