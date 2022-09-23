import React from "react";
import style from "./Skill.module.scss"
import {Title2} from "../../common/components/title2/Title2";


export const Skill = (props) => {
    return <div className={style.skill}>
        <div className={style.icon}></div>
        <div className={style.descriptionContainer}>
            <Title2 title={props.title}/>
            <div className={style.description}>{props.description}</div>
        </div>
    </div>
}