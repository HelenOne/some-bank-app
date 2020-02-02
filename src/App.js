import React from "react";
import "./App.css";
import { Sidebar } from "./components/Sidebar.tsx";
import Savings from "./components/Savings";

function App() {
  return (
    <div className="App">
      <div className="fixedPart">
        <Sidebar />
      </div>
      <div className="scrollPart">
        <Savings />
      </div>
    </div>
  );
}

export default App;
