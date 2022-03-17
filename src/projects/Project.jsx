import React from "react";
import style from "./Project.module.css"

export const Project = (props) => {
    return <div className={style.project}>
        <div>
            <div className={style.image}></div>
            <div>Watch</div>
        </div>
        <div>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    </div>
}