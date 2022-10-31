import React from "react";
import style from "./WorkingConditions.module.scss"
import {Title} from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";

export const WorkingConditions = () => {
    return <div className={style.workingConditionsBlock}>
        <div className={style.container}>
            <div><Title title={"Considering options for remote work"}/></div>
            <div className={style.button}><Button title={"Hire me"}/></div>
        </div>
    </div>
}