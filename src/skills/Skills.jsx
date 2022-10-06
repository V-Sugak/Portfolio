import React from "react";
import style from "./Skills.module.scss"
import styleContainer from "./../common/styles/Container.module.css"
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import js from "./icons/js.png";
import ts from "./icons/typescript.png";
import react from "./icons/react.png";
import redux from "./icons/redux.png";
import css from "./icons/css.png";
import html from "./icons/html.png";
import formik from "./icons/formik.png";
import tests from "./icons/tests.png";
import restAPI from "./icons/restAPI.png";
import mui from "./icons/mui.png";
import StoryBook from "./icons/StoryBook.png";
import git from "./icons/git.png";

const skills = [
    {id: 1, title: "JavaScript", icon: js},
    {id: 2, title: "TypeScript", icon: ts},
    {id: 3, title: "React", icon: react},
    {id: 4, title: "Redux-Toolkit", icon: redux},
    {id: 5, title: "HTML", icon: html},
    {id: 6, title: "CSS / SASS", icon: css},
    {id: 7, title: "Formik", icon: formik},
    {id: 8, title: "REST API", icon: restAPI},
    {id: 9, title: "Story book", icon: StoryBook},
    {id: 10, title: "Unit tests", icon: tests},
    {id: 11, title: "Material UI", icon: mui},
    {id: 12, title: "Git", icon: git},
]

export const Skills = () => {

    return <div className={style.skillsBlock}>
        <div className={`${styleContainer.container}  ${style.skillsContainer}`}>
            <Title title={'Skills'}/>
            <div className={style.skills}>
                {skills.map(skill => {
                    return <Skill key={skill.id} title={skill.title}
                                  icon={skill.icon}/>
                })}
            </div>
        </div>
    </div>
}