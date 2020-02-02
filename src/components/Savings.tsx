import React from "react";
import "../styles/Savings.css";
import "../App.css";

type SavingsDescription = {
  key: string;
  amount: number;
  label: string;
  percent: number;
}[];

const savingsDescription: SavingsDescription = [
  {
    key: "premier",
    amount: 50090,
    label: "Premier Acount",
    percent: 29.32
  },
  {
    key: "isa",
    amount: 9900,
    label: "ISA Savings",
    percent: -33.45
  },
  {
    key: "other",
    amount: 120012,
    label: "Other Savings",
    percent: 0
  },
  {
    key: "mortgage",
    amount: 3681233,
    label: "Mortgage",
    percent: 29.32
  }
];

export default class Savings extends React.Component {
  render() {
    return (
      <div className="savings">
        {savingsDescription.map((savingsElement, index) => {
          return (
            <div className="savings-block">
              <div className="savings-amount">£{savingsElement.amount}</div>
              <div className="savings-label">{savingsElement.label}</div>
              <div
                className={(() => {
                  if (savingsElement.percent > 0) {
                    return "savings-percent positive";
                  } else if (savingsElement.percent < 0) {
                    return "savings-percent negative";
                  } else {
                    return "savings-percent zero";
                  }
                })()}
              >
                <svg
                  className="arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
                {Math.abs(savingsElement.percent).toFixed(2)}%
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
