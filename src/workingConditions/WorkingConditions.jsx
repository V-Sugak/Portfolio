import React from "react";
import style from "./WorkingConditions.module.css"
import styleContainer from "../common/styles/Container.module.css";

export const WorkingConditions = () => {
    return <div className={style.workingConditionsBlock}>
        <div className={`${styleContainer.container}  ${style.workingConditionsContainer}`}>
            <h2 className={style.title}>Considering options for remote work</h2>
            <div className={style.button}>Hire me</div>
        </div>
    </div>
}