import style from "./Button.module.css";

export function Button(props){
    function on()
    {
        props.phone(props.value);
    }
    console.log("PROPSAS YRA: ", props);
    return <button className={"button " + props.st} onClick={on}>{props.value}</button>
}

