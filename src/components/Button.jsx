import style from "./Button.module.css";

export function Button(props){

    function on(){
        props.phone(props.value);
    }
    const s = (props.isActive  ? style.active : style.button) + " " + props.stiliukas;

    return <button className={s} onClick={on}>{props.value}</button>;
}
