import style from "./Controls.module.css";
import { Button } from "./Button";

export function Controls( {telefonas} ){

    function getOperation(value){
        telefonas(value);
    }

    return (
        <>
        <div className={style.box}>
            <Button id={"a"} value={"+"} phone={getOperation} />
            <Button id={"b"} value={"-"} phone={getOperation} />
            <Button id={"c"} value={"*"} phone={getOperation} />
            <Button id={"d"} value={"/"} phone={getOperation} />
        </div>
        </>
    );
}