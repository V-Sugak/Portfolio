import React from "react";
import style from "./Skill.module.scss"
import {Title2} from "../../common/components/title2/Title2";


export const Skill = (props) => {
    return <div className={style.skill}>
        <div className={style.icon}>
            <img src={props.icon} alt=""/>
        </div>

           {/* <Title2  title={props.title}/>*/}
            <h5 className={style.title}>{props.title}</h5>
          {/* <div className={style.description}>{props.description}</div>*/}

    </div>
}