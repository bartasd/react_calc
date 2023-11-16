import React, { useState } from 'react';
import style from "./App.module.css";
import { Controls } from "./components/Controls"
import { Pad } from "./components/Pad"

function App() {
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);
  const handlePad1 = (data) => setNum1(data);
  const handlePad2 = (data) => setNum2(data);
  const handleControls = (data) => setOp(data);
  const getAns = () => {
    if(op === "+") return +num1 + +num2;
    else if(op === "-") return +num1-(+num2);
    else if(op === "*") return +num1*(+num2);
    else if(op === "/" && num2 !== "0") return (+num1)/(+num2);
    else return "Please choose second number not 0";
  }

  return (
    <>
      <div className={style.field}>
        <div className={style.tools}>
          <Pad onData={handlePad1}/>
          <Controls onData={handleControls}/>
          <Pad onData={handlePad2}/>
        </div>
      <h1 className={style.result}>RESULT:</h1>
      <p className={style.answer}>{getAns}</p>
      </div>
    </>
  );
}

export default App;