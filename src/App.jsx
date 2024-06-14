import React, { useState } from "react";
import './index.css';

export default function App() {
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [people, setPeople] = useState(1);
  const [customTip, setCustomTip] = useState("");

  const handleTipButtonClick = (value) => {
    setTipPercentage(Number(value));
    setCustomTip("");
  };

  const handleCustomTipChange = (event) => {
    setCustomTip(event.target.value);
    setTipPercentage(Number(event.target.value));
  };

  const handleReset = () => {
    setBill(0);
    setTipPercentage(0);
    setPeople(1);
    setCustomTip("");
  };

  const tipAmount = (bill * tipPercentage) / 100 / people;
  const totalAmount = bill / people + tipAmount;

  return (
    <>
      <header>
        <img src="./images/logo.svg" alt="Logo" />
      </header>
      <div className="general-wrapper">
        <div className="data-wrapper">
          <h1>Bill</h1>
          <label htmlFor="input-bill">
            <input
              className="input-bill"
              id="input-bill"
              type="number"
              value={bill}
              min="0"
              onChange={(e) => setBill(Number(e.target.value))}
            />
          </label>
          <h2>Select Tip %</h2>
          <ul>
            {[5, 10, 15, 25, 50].map((value) => (
              <li key={value}>
                <button
                  type="button"
                  className={`percentage-button ${tipPercentage === value ? 'active' : ''}`}
                  value={value}
                  onClick={(e) => handleTipButtonClick(e.target.value)}
                >
                  {value}%
                </button>
              </li>
            ))}
            <li>
              <input
                type="number"
                placeholder="Custom"
                id="custom-percentage-button"
                className="percentage-button"
                value={customTip}
                onChange={handleCustomTipChange}
              />
            </li>
          </ul>
          <h2>Number of People</h2>
          <label htmlFor="input-people">
            <input
              id="input-people"
              className="input-people"
              type="number"
              value={people}
              min="1"
              onChange={(e) => setPeople(Number(e.target.value))}
            />
          </label>
        </div>
        <div className="result-wrapper">
          <div className="result-txt">
            <div className="text-amount">
              <div>
                <h2>Tip Amount</h2>
                <p>/ person</p>
              </div>
              <h3>
                ${tipAmount.toFixed(2)}
              </h3>
            </div>
            <div className="total-amount">
              <div>
                <h2>Total</h2>
                <p>/ person</p>
              </div>
              <h3>
                ${totalAmount.toFixed(2)}
              </h3>
            </div>
          </div>
          <button type="button" id="reset-button" className="reset-button" onClick={handleReset}>
            RESET
          </button>
        </div>
      </div>
    </>
  );
}
