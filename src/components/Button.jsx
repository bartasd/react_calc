import style from "./Button.module.css";

export function Button(props){
    function on()
    {
        props.phone(props.value);
    }
    console.log("button style: ", props.value);
    return <button className={"button " + props.st} onClick={on}>{props.value}</button>
}

