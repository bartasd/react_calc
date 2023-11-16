import style from "./Button.module.css";

export function Button({on, cl, t}){
    return <button className={"button " + cl} onClick={on}>{t}</button>
}

