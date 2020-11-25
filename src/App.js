// send to: luis.barreras@unosquare.com

import "./App.css";
import { useState } from "react";
import NumbersApi from "./NumbersApi";

function App() {
  const [numberListStr, setNumberListStr] = useState("");
  const [sortedNumberList, setSortedNumberListStr] = useState([]);
  const [isValid, setIsValid] = useState(false);

  const validate = (value) => {
    const result = value.match(/^[0-9]+(,[0-9]+)*$/g);
    setIsValid(result !== null);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setNumberListStr(value);
    validate(value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const sortedNumberList = await NumbersApi.sort(numberListStr);
      console.log(numberListStr);
      setSortedNumberListStr(sortedNumberList);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="App">
      <h1>Sorting numbers</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          onChange={handleInputChange}
          value={numberListStr}
          className={!isValid ? "error" : ""}
          data-testid="input"
        />
        <button type="submit" placeholder="0,0,0,0,0,0" disabled={!isValid} data-testid="button">
          Order
        </button>
        {!isValid && <p className="error-message">Invalid format</p>}
      </form>
      {sortedNumberList && <p className="result">Result: [{sortedNumberList.join(", ")}]</p>}
    </div>
  );
}

export default App;
