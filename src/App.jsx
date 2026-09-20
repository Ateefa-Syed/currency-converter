import { useState } from "react";
import "./App.css";

function App() {
  const demoState = new URLSearchParams(window.location.search).get("state");
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [empty, setEmpty] = useState(false);

  const handleConvert = async () => {
  setLoading(true);
  setRate(null);
  setError("");
  setEmpty(false);

  if (demoState === "loading") {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setLoading(false);
    return;
  }

  if (demoState === "error") {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setError(
      "We couldn't fetch the exchange rate. Please check your internet connection and try again."
    );
    setLoading(false);
    return;
  }

  if (demoState === "empty") {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setEmpty(true);
    setLoading(false);
    return;
  }

  try {
    const response = await fetch(
      `https://api.frankfurter.dev/v2/rate/${fromCurrency}/${toCurrency}`
    );

    if (!response.ok) {
      setEmpty(true);
      return;
    }

    const data = await response.json();

    if (!data.rate) {
      setEmpty(true);
      return;
    }

    setRate(data.rate);
  } catch {
    setError(
      "We couldn't fetch the exchange rate. Please check your internet connection and try again."
    );
  } finally {
    setLoading(false);
  }
};

  const convertedAmount =
    rate && amount ? (Number(amount) * rate).toFixed(2) : null;

  return (
    <div className="app">
      <h1>Currency Converter</h1>
      <p>Convert currencies using live exchange rates.</p>

      <div className="converter">
        <label>
          Amount
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            min="0"
          />
        </label>

        <label>
          From
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="JPY">JPY - Japanese Yen</option>
          </select>
        </label>

        <label>
          To
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            <option value="INR">INR - Indian Rupee</option>
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound</option>
            <option value="JPY">JPY - Japanese Yen</option>
          </select>
        </label>

        <button onClick={handleConvert}>Convert</button>

        <div className="result">
  {loading && (
    <div className="state loading-state">
      <div className="spinner"></div>
      <h3>Loading exchange rate...</h3>
      <p>Please wait while we fetch the latest rate.</p>
    </div>
  )}

  {error && (
    <div className="state error-state">
      <div className="state-icon">!</div>
      <h3>Unable to fetch exchange rate</h3>
      <p>{error}</p>
    </div>
  )}

  {empty && (
    <div className="state empty-state">
      <div className="state-icon">—</div>
      <h3>No exchange rate available</h3>
      <p>
        The source does not provide a rate for this currency pair.
      </p>
    </div>
  )}

  {convertedAmount && !loading && !error && !empty && (
    <div className="state success-state">
      <h3>Conversion Result</h3>
      <p className="conversion">
        {amount} {fromCurrency} ={" "}
        <strong>
          {convertedAmount} {toCurrency}
        </strong>
      </p>
    </div>
  )}

  {!loading && !error && !empty && !rate && (
    <div className="state initial-state">
      <p>Enter an amount and click Convert.</p>
    </div>
  )}
</div>
      </div>
    </div>
  );
}

export default App;