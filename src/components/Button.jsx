import React, { useState } from 'react';
import style from "./Button.module.css";

export function Button(props){
    const [isActive, setActive] = useState(false);
    function on()
    {
        props.phone(props.value);
        setActive(!isActive);
    }

    return <button className={isActive?style.buttonActive : style.button} id={props.id} onClick={on}>{props.value}</button>
}
