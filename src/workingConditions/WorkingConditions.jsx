import React from "react";
import style from "./WorkingConditions.module.scss"
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";

export const WorkingConditions = () => {
    return <div className={style.workingConditionsBlock}>
        <div className={`${styleContainer.container}  ${style.workingConditionsContainer}`}>
            <Title title={"Considering options for remote work"}/>
            <Button title={"Hire me"}/>
        </div>
    </div>
}