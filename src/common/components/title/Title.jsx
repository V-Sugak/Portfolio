import React from "react";
import style from "./Title.module.css"

export const Title = (props) => {
    return <div className={style.title}>
        <h3>{props.title}</h3>
    </div>
}