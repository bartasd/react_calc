import style from "./Pad.module.css";
import { Button } from "./Button"

export function Pad( {ragelis} ){
  
    function getDigit(value){
        ragelis(value);
    }
    return (
        <>
        <div className={style.box}>
            <Button st={'a'} digit={"1"} telefonas={getDigit} />
            <Button st={'a'} digit={"2"} telefonas={getDigit} />
            <Button st={'a'} digit={"3"} telefonas={getDigit} />
            <Button st={'a'} digit={"4"} telefonas={getDigit} />
            <Button st={'a'} digit={"5"} telefonas={getDigit} />
            <Button st={'a'} digit={"6"} telefonas={getDigit} />
            <Button st={'a'} digit={"7"} telefonas={getDigit} />
            <Button st={'a'} digit={"8"} telefonas={getDigit} />
            <Button st={'a'} digit={"9"} telefonas={getDigit} />
            <Button st={'b'} digit={"0"} telefonas={getDigit} />
        </div>
        </>
    );
}