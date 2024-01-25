import { useState } from "react";
import Input from "./Input";

import "./App.css";

function App() {
  const [count, setCount] = useState("");
  const btntext = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "+",
    "/",
    "*",
    "c",
    "=",
  ];
  const equelEl = document.getElementById("=");
  equelEl.style.backgroundColor = "green";
  function handlefunc(e) {
    const val = e.target.id;
    if (val == "c") {
      setCount("");
    } else if (val == "=") {
      setCount(eval(count));
    } else {
      setCount(count + val);
    }
  }

  return (
    <div className="calculator--container">
      <Input val={count} />
      <div className="gap--box">calculator</div>
      <div className="button--container">
        {btntext.map((value, index, array) => {
          return (
            <button
              onClick={(e) => {
                handlefunc(e);
              }}
              id={value}
              key={value}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
