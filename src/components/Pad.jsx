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
            <Button onClick={sendDataToParent("1")} text={1} />
            <Button onClick={sendDataToParent("2")} text={2} />
            <Button onClick={sendDataToParent("3")} text={3} />
            <Button onClick={sendDataToParent("4")} text={4} />
            <Button onClick={sendDataToParent("5")} text={5} />
            <Button onClick={sendDataToParent("6")} text={6} />
            <Button onClick={sendDataToParent("7")} text={7} />
            <Button onClick={sendDataToParent("8")} text={8} />
            <Button onClick={sendDataToParent("9")} text={9} />
            <Button onClick={sendDataToParent("0")} className={style.j} text={0} />
        </div>
        </>
    );
}