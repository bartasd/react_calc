import React, { useState } from 'react';
import style from "./App.module.css";
import { Controls } from "./components/Controls"
import { Pad } from "./components/Pad"

function App() {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  const [op, setOp] = useState('+');
  
  function goCount(){
    let temp = null;
    if(op === "+"){
      temp = num1 + num2;
    }
    else if(op === "-"){
      temp = num1 - num2;
    }
    else if(op === "*"){
      temp = num1 * num2;
    }
    else if(op === "/" && num2 !== 0){
      temp = num1 / num2;
    }
    else{
      temp = "You cannot divide by zero.";
    }
    return temp;
  }
  
  function getPad1(value){
    setNum1(value);
  }
  function getPad2(value){
    setNum2(value);
  }
  function getOp(value){
    setOp(value);
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
      <p className={style.answer}>{goCount()}</p>
      </div>
    </>
  );
}

export default App;