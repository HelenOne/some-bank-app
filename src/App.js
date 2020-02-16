import React from "react";
import "./App.css";
import { Sidebar } from "./components/Sidebar.tsx";
import Savings from "./components/Savings";
import Cards from "./components/Cards.tsx";
import DailyTransactions from "./components/DailyTransactions.tsx";
import QuickTransfers from "./components/QuickTransfers.tsx";
import Chart from "./components/Chart.tsx";

function App() {
  return (
    <div className="App">
      <div className="fixedPart">
        <Sidebar />
      </div>
      <div className="scrollPart">
        <Savings />
        <div className="centralPart">
          <div className="transactions">
            <Chart />
            <DailyTransactions />
          </div>
          <div className="transfers">
            <QuickTransfers />
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
