import style from "./Pad.module.css";
import { Button } from "./Button"

export function Pad( {ragelis} ){
  
    function getDigit(value){
        ragelis(value);
    }
    return (
        <>
        <div className={style.box}>
            <Button st={'a'} value={"1"} phone={getDigit} />
            <Button st={'a'} value={"2"} phone={getDigit} />
            <Button st={'a'} value={"3"} phone={getDigit} />
            <Button st={'a'} value={"4"} phone={getDigit} />
            <Button st={'a'} value={"5"} phone={getDigit} />
            <Button st={'a'} value={"6"} phone={getDigit} />
            <Button st={'a'} value={"7"} phone={getDigit} />
            <Button st={'a'} value={"8"} phone={getDigit} />
            <Button st={'a'} value={"9"} phone={getDigit} />
            <Button st={'b'} value={"0"} phone={getDigit} />
        </div>
        </>
    );
}