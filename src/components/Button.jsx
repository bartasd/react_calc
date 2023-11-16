import style from "./Button.module.css";

export function Button(props){
    function on()
    {
        props.phone(props.value);
    }

    return <button className={style.button} id={props.id} onClick={on}>{props.value}</button>
}

