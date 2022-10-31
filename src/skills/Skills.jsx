import React from "react";
import style from "./Skills.module.scss"
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import js from "../assets/image/icons-skills/js.png";
import ts from "../assets/image/icons-skills/typescript.png";
import react from "../assets/image/icons-skills/react.png";
import redux from "../assets/image/icons-skills/redux.png";
import css from "../assets/image/icons-skills/css.png";
import html from "../assets/image/icons-skills/html.png";
import formik from "../assets/image/icons-skills/formik.png";
import tests from "../assets/image/icons-skills/tests.png";
import restAPI from "../assets/image/icons-skills/restAPI.png";
import mui from "../assets/image/icons-skills/mui.png";
import StoryBook from "../assets/image/icons-skills/StoryBook.png";
import git from "../assets/image/icons-skills/git.png";

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
        <div className={style.container}>
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