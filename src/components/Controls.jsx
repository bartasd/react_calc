import style from "./Controls.module.css";
import { Button } from "./Button";
import React, { useState } from 'react';

export function Controls( {telefonas} ){

    const [op, setOperation] = useState("+")

    function getOperation(value){
        telefonas(value);
        setOperation(value);
    }

    return (
        <>
        <div className={style.box}>
            <Button className={"a"} isActive={op === "+"} value={"+"} phone={getOperation} />
            <Button className={"b"} isActive={op === "-"} value={"-"} phone={getOperation} />
            <Button className={"c"} isActive={op === "*"} value={"*"} phone={getOperation} />
            <Button className={"d"} isActive={op === "/"} value={"/"} phone={getOperation} />
        </div>
        </>
    );
}