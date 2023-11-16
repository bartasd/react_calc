import style from "./Controls.module.css";
import { Button } from "./Button";

export function Controls({ onData }){

    const sendDataToParent = (num) => {
        console.log(num)
        onData(num);
    };

    return (
        <>
        <div className={style.box}>
            <Button onClick={sendDataToParent("+")} className={style.a} text={"+"}/>
            <Button onClick={sendDataToParent("-")} className={style.b} text={"-"}/>
            <Button onClick={sendDataToParent("*")} className={style.c} text={"*"}/>
            <Button onClick={sendDataToParent("/")} className={style.d} text={"/"}/>
        </div>
        </>
    );
}