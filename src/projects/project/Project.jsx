import React from "react";
import style from "./Project.module.css"

export const Project = (props) => {
    return <div className={style.project}>
        <div className={style.buttonContainer}>
            <a href={'huuiui'}>
                <button>Watch</button>
            </a>
        </div>
        <div className={style.descriptionContainer}>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    </div>
}