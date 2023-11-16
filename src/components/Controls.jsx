import style from "./Controls.module.css";
import { Button } from "./Button";

export function Controls( {telefonas} ){

    function getOperation(value){
        telefonas(value);
    }

    return (
        <>
        <div className={style.box}>
            <Button className={"a"} value={"+"} phone={getOperation} />
            <Button className={"b"} value={"-"} phone={getOperation} />
            <Button className={"c"} value={"*"} phone={getOperation} />
            <Button className={"d"} value={"/"} phone={getOperation} />
        </div>
        </>
    );
}