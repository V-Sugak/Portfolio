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
            <h5 className={style.title}>{props.title}</h5>
            <span>{props.description}</span>
        </div>
    </div>
}