import React from "react";
import style from "./Button.module.scss"

export const Button = (props) => {
    const btnClass = props.className ? (style.buttonContainer + ' ' + props.className) : style.buttonContainer
    return (<div className={btnClass}>
        <a className={style.btn} href="">{props.title}</a>
    </div>)
}



