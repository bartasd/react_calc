import style from "./Pad.module.css";
import { Button } from "./Button"

export function Pad( {telefonas} ){

    function getDigit(value){
        telefonas(value);
    }

    return (
        <>
        <div className={style.box}>
            <Button className={"a"} value={"1"} phone={getDigit} />
            <Button className={"b"} value={"2"} phone={getDigit} />
            <Button className={"c"} value={"3"} phone={getDigit} />
            <Button className={"d"} value={"4"} phone={getDigit} />
            <Button className={"e"} value={"5"} phone={getDigit} />
            <Button className={"f"} value={"6"} phone={getDigit} />
            <Button className={"g"} value={"7"} phone={getDigit} />
            <Button className={"h"} value={"8"} phone={getDigit} />
            <Button className={"j"} value={"9"} phone={getDigit} />
            <Button className={"k"} value={"0"} phone={getDigit} />
        </div>
        </>
    );
}