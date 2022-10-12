import React from "react";
import style from "./Skill.module.scss"


export const Skill = (props) => {
    return <div className={style.skill}>
        <div className={style.icon}>
            <img src={props.icon} alt=""/>
        </div>
        <div className={style.title}>{props.title}</div>
    </div>
}