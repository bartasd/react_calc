import style from "./Pad.module.css";
import { Button } from "./Button";
import React, { useState } from 'react';

export function Pad( {telefonas} ){

    const [number, setNumber] = useState(-1);

    function getDigit(value){
        telefonas(value);
        setNumber(value);
    }

    return (
        <div className={style.box}>
            <Button stiliukas={style.a} isActive={number === 1} value={1} phone={getDigit} />
            <Button stiliukas={style.b} isActive={number === 2} value={2} phone={getDigit} />
            <Button stiliukas={style.c} isActive={number === 3} value={3} phone={getDigit} />
            <Button stiliukas={style.d} isActive={number === 4} value={4} phone={getDigit} />
            <Button stiliukas={style.e} isActive={number === 5} value={5} phone={getDigit} />
            <Button stiliukas={style.f} isActive={number === 6} value={6} phone={getDigit} />
            <Button stiliukas={style.g} isActive={number === 7} value={7} phone={getDigit} />
            <Button stiliukas={style.h} isActive={number === 8} value={8} phone={getDigit} />
            <Button stiliukas={style.j} isActive={number === 9} value={9} phone={getDigit} />
            <Button stiliukas={style.k} isActive={number === 0} value={0} phone={getDigit} />
        </div>
    );
}