import React, { useState } from 'react';
import style from "./Button.module.css";

export function Button(props){
    const [isActive, setActive] = useState(false);
    function on()
    {
        props.phone(props.value);
        setActive(!isActive);
    }

    return <button className={isActive?(style.button + ' ' + style.buttonActive + ' ' + props.className):(style.button + ' ' + props.className)} onClick={on}>{props.value}</button>
}
