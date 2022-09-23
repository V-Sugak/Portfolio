import React from "react";
import style from "./Project.module.scss"
import {Title2} from "../../common/components/title2/Title2";

export const Project = (props) => {

    return <div className={style.project}>
        <div className={style.buttonContainer}>
            <a className={style.btn} href="">Watch</a>
        </div>
        <div className={style.descriptionContainer}>
            <Title2 title={props.title}/>
            <p>
                <div className={style.description}>{props.description}</div>
                <div className={style.link}>
                    <a href="">Github</a>
                </div>

            </p>
        </div>
    </div>
}