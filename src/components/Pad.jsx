import style from "./Pad.module.css";
import { Button } from "./Button"

export function Pad( {telefonas} ){

    function getDigit(value){
        telefonas(value);
    }

    return (
        <>
        <div className={style.box}>
            <Button id={"a"} value={"1"} phone={getDigit} />
            <Button id={"b"} value={"2"} phone={getDigit} />
            <Button id={"c"} value={"3"} phone={getDigit} />
            <Button id={"d"} value={"4"} phone={getDigit} />
            <Button id={"e"} value={"5"} phone={getDigit} />
            <Button id={"f"} value={"6"} phone={getDigit} />
            <Button id={"g"} value={"7"} phone={getDigit} />
            <Button id={"h"} value={"8"} phone={getDigit} />
            <Button id={"j"} value={"9"} phone={getDigit} />
            <Button id={"k"} value={"0"} phone={getDigit} />
        </div>
        </>
    );
}