import { useState } from "react";
import "./App.css"; 

export default function App() {
  const [count, setCount] = useState(0);
  const [countToSet, setCountToSet] = useState(0);

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">Counter</h1>

        <p className="label">Current Value</p>

        <div className="counter-value">{count}</div>

        <div style={{ marginBottom: "2.5rem" }}>
          <button
            className="btn btn-primary"
            onClick={() => setCount(count + 1)}
          >
            Increase
          </button>

          <button className="btn btn-reset" onClick={() => setCount(0)}>
            Reset
          </button>

          <button
            className="btn btn-primary"
            onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
          >
            Decrease
          </button>
        </div>

        <div className="input-section">
          <input
            type="number"
            className="number-input"
            value={countToSet}
            onChange={(e) => setCountToSet(Number(e.target.value))}
          />
          <button
            className="btn btn-set"
            onClick={() => {
              setCount(countToSet);
              setCountToSet(0);
            }}
          >
            Set Value
          </button>
        </div>
      </div>
    </div>
  );
}
