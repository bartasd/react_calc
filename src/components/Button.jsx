import style from "./Button.module.css";

export function Button(props){
    return <button className={style.button} onClick={console.log("a")}>{props.text}</button>
}