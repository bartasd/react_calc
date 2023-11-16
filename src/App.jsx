import React, { useState } from 'react';
import style from "./App.module.css";
import { Controls } from "./components/Controls"
import { Pad } from "./components/Pad"

function App() {
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);
  let ans = null;
  function getPad1(value){
    setNum1(value);
    ans = eval(num1+op+num2)
    console.log(value);
  }
  function getPad2(value){
    setOp(value);
    ans = eval(num1+op+num2)
    console.log(value);
  }
  function getOp(value){
    setNum2(value);
    ans = eval(num1+op+num2)
    console.log(value);
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