import React, { useState } from 'react';
import style from "./App.module.css";
import { Controls } from "./components/Controls"
import { Pad } from "./components/Pad"

function App() {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  const [op, setOp] = useState('+');
  const [ans, setAns] = useState(2);
  
  function goCount(){
    let temp = null;
    if(op === "+")
      temp = +num1 + +num2;
    else if(op === "-")
      temp = +num1 - +num2;
    else if(op === "*")
      temp = +num1 * +num2;
    else if(op === "/" && +num2 !== 0)
      temp = +num1 / +num2;
    else
      temp = "You cannot divide by zero.";
    setAns(temp);
    console.log("NUM1: ", num1, " NUM2: ", num2, " OP: ", op, " ANS: ", temp);
  }
  
  
  function getPad1(value){
    setNum1(value);
    if(num1 && op && num2)
      goCount();
  }
  function getPad2(value){
    setNum2(value);
    if(num1 && op && num2)
      goCount();
  }
  function getOp(value){
    setOp(value);
    if(num1 && op && num2)
      goCount();
  }

  return (
    <>
      <div className={style.field}>
        <div className={style.tools}>
          <Pad telefonas={getPad1} />
          <Controls telefonas={getOp} />
          <Pad telefonas={getPad2} />
        </div>
      <h1 className={style.result}>RESULT:</h1>
      <p className={style.answer}>{ans}</p>
      </div>
    </>
  );
}

export default App;