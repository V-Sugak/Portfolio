import React from "react";
import style from "./Skills.module.scss"
import styleContainer from "./../common/styles/Container.module.css"
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";


export const Skills = () => {
    return <div className={style.skillsBlock}>
        <div className={`${styleContainer.container}  ${style.skillsContainer}`}>
            <Title title={'Skills'}/>
            <div className={style.skills}>
                <Skill title={'JS'}
                       description={'Programming language that conforms to the ECMAScript specification.'}/>
                <Skill title={'Redux'} description={'JavaScript library for managing application state.'}/>
                <Skill title={'React'}
                       description={'JavaScript library for building user interfaces or UI components.'}/>
                <Skill title={'React'}
                       description={'JavaScript library for building user interfaces or UI components.'}/>

            </div>
        </div>
    </div>
}