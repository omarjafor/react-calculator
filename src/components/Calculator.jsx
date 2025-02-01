import { useState } from "react";

function Calculator() {

    const [currentInput, setCurrentInput] = useState("");
    const [answer, setAnswer] = useState(0);
  
    function appendValue(number) {
      setCurrentInput((prev) => prev + number);
    }
  
    function clearDisplay() {
      setCurrentInput("");
      setAnswer(0);
    }
  
    function deleteLast() {
      setCurrentInput((prev) => prev.slice(0, -1));
    }
  
    function calculateResult() {
      try {
        setAnswer(eval(currentInput)); // Be cautious using eval
      } catch (error) {
        setAnswer("Error");
        console.error(error);
      }
    }

  return (
    <div className="calculator">
        <div className="display">
          <div id="history">{currentInput || "0"}</div>
          <div id="result">{answer}</div>
        </div>
        <div className="buttons">
          <button onClick={() => appendValue("/")}>/</button>
          <button onClick={() => appendValue("*")}>*</button>
          <button onClick={() => deleteLast()}>DEL</button>
          <button onClick={() => clearDisplay()}>C</button>
          <button onClick={() => appendValue("7")}>7</button>
          <button onClick={() => appendValue("8")}>8</button>
          <button onClick={() => appendValue("9")}>9</button>
          <button onClick={() => appendValue("-")}>-</button>
          <button onClick={() => appendValue("4")}>4</button>
          <button onClick={() => appendValue("5")}>5</button>
          <button onClick={() => appendValue("6")}>6</button>
          <button onClick={() => appendValue("+")}>+</button>
          <button onClick={() => appendValue("1")}>1</button>
          <button onClick={() => appendValue("2")}>2</button>
          <button onClick={() => appendValue("3")}>3</button>
          <button onClick={() => calculateResult()}>=</button>
          <button onClick={() => appendValue("0")} className="zero">
            0
          </button>
          <button onClick={() => appendValue(".")}>.</button>
        </div>
      </div>
  )
}

export default Calculator