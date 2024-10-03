import React, { useRef, useState } from "react";
import Styles from "./Calculator.module.css";

const Calculator = () => {
  const inputRef = useRef();
  const [result, setResult] = useState(null);

  const inputRefHandle = (value) => {
    console.log("Vlaue", value);
    console.log(typeof value);
    if (value === "C") {
      inputRef.current.value = "";
      setResult(null);
    } else if (value === "=") {
      try {
        if (!inputRef.current.value) {
          setResult("Error");
        } else if (inputRef.current.value === "0/0") {
          setResult("NaN");
        } else {
          let answer = new Function("return " + inputRef.current.value)();
          setResult(answer);
        }
      } catch (error) {
        setResult("Error");
      }
    } else {
      inputRef.current.value += value;
    }
  };

  return (
    <div className={Styles.card}>
      <h2 className={Styles.heading}>React Calculator</h2>
      <input className={Styles.input} type="text" ref={inputRef} readOnly />
      {result ? <h3 className={Styles.result}>{result}</h3> : null}
      <div className={Styles.buttonBox}>
        <button className={Styles.button} onClick={() => inputRefHandle("7")}>
          7
        </button>
        <button className={Styles.button} onClick={() => inputRefHandle("8")}>
          8
        </button>
        <button className={Styles.button} onClick={() => inputRefHandle("9")}>
          9
        </button>
        <button className={Styles.button} onClick={() => inputRefHandle("+")}>
          +
        </button>
        <button className={Styles.button} onClick={() => inputRefHandle("4")}>
          4
        </button>
        <button className={Styles.button} onClick={() => inputRefHandle("5")}>
          5
        </button>
        <button className={Styles.button} onClick={() => inputRefHandle("6")}>
          6
        </button>
        <button className={Styles.button} onClick={() => inputRefHandle("-")}>
          -
        </button>
        <button className={Styles.button} onClick={() => inputRefHandle("1")}>
          1
        </button>
        <button className={Styles.button} onClick={() => inputRefHandle("2")}>
          2
        </button>
        <button className={Styles.button} onClick={() => inputRefHandle("3")}>
          3
        </button>
        <button className={Styles.button} onClick={() => inputRefHandle("*")}>
          *
        </button>
        <button className={Styles.button} onClick={() => inputRefHandle("C")}>
          C
        </button>
        <button className={Styles.button} onClick={() => inputRefHandle("0")}>
          0
        </button>
        <button className={Styles.button} onClick={() => inputRefHandle("=")}>
          =
        </button>
        <button className={Styles.button} onClick={() => inputRefHandle("/")}>
          /
        </button>
      </div>
    </div>
  );
};

export default Calculator;
