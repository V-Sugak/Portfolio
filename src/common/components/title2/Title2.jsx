import React from "react";
import style from "./Title2.module.scss"


export const Title2 = (props) => {
    return <h5 className={style.title}>{props.title}</h5>
}