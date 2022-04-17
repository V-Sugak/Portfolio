import React from "react";
import style from "./Project.module.css"

export const Project = (props) => {
    return <div className={style.project}>
        <div className={style.buttonContainer}>
                <button className={style.btn}>Watch</button>
        </div>
        <div className={style.descriptionContainer}>
            <h5 className={style.title}>{props.title}</h5>
            <p>{props.description}</p>
        </div>
    </div>
}