import style from "./Controls.module.css";
import { Button } from "./Button";

export function Controls( {ragelis} ){

    function getOperation(value){
        ragelis(value);
    }

    return (
        <>
        <div className={style.box}>
            <Button st={"a"} op={"+"} telefonas={getOperation} />
            <Button st={"a"} op={"-"} telefonas={getOperation} />
            <Button st={"a"} op={"*"} telefonas={getOperation} />
            <Button st={"a"} op={"/"} telefonas={getOperation} />
        </div>
        </>
    );
}