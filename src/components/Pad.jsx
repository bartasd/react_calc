import style from "./Pad.module.css";
import { Button } from "./Button"

export function Pad({ onData }){
  
    const sendDataToParent = (num) => {
      console.log(num)
      onData(num);
    };
    return (
        <>
        <div className={style.box}>
            <Button onClick={sendDataToParent("1")} className={style.a} text={1} />
            <Button onClick={sendDataToParent("2")} className={style.b} text={2} />
            <Button onClick={sendDataToParent("3")} className={style.c} text={3} />
            <Button onClick={sendDataToParent("4")} className={style.d} text={4} />
            <Button onClick={sendDataToParent("5")} className={style.e} text={5} />
            <Button onClick={sendDataToParent("6")} className={style.f} text={6} />
            <Button onClick={sendDataToParent("7")} className={style.g} text={7} />
            <Button onClick={sendDataToParent("8")} className={style.h} text={8} />
            <Button onClick={sendDataToParent("9")} className={style.k} text={9} />
            <Button onClick={sendDataToParent("0")} className={style.j} text={0} />
        </div>
        </>
    );
}