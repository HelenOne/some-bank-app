import React from "react";
import "../App.css";
import "../styles/central-part.sass";
import separateWithCommas from "../commasSeparationFunction";

type Transactions = {
  label: string;
  date: string;
  amount: number;
  rising: boolean | undefined;
}[];

const transactions: Transactions = [
  {
    label: "Minimal apps Jan draft",
    date: "Monday 13 January 2020",
    amount: 50120,
    rising: true
  },
  {
    label: "Mortgage Jubilee Place",
    date: "Thursday 2 January 2020",
    amount: 17394,
    rising: false
  },
  {
    label: "Craven Hill Rent",
    date: "Tuesday 31 December 2019",
    amount: 3670,
    rising: true
  }
];

export default class DailyTransactions extends React.Component {
  render() {
    return (
      <div className="transactions-block">
        {transactions.map(transaction => {
          return (
            <div className="transaction">
              <div className="title">
                <div className="arrow-wrapper">
                  <svg
                    className={(() => {
                      if (transaction.rising) {
                        return "arrow positive";
                      } else if (transaction.rising === false) {
                        return "arrow negative";
                      } else {
                        return "arrow zero";
                      }
                    })()}
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                    width="16"
                  >
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </div>
                <div className="text">
                  <span>{transaction.label}</span>
                  <span className="date"> {transaction.date}</span>
                </div>
              </div>
              <div className="amount">
                {"£" + separateWithCommas(transaction.amount)}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
