import React from "react";
import style from "./Projects.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";

const projects = [
    {
        id: 1,
        title: "Social Network",
        description: "This is a simple social network. It was is my learning project.I used Typescript, React, Redux. This project was developed by applying of React class based components. Also I used such libraries like redux-thunk, axios.",
        github: "https://github.com/V-Sugak/social-network",
        githubPage: "https://v-sugak.github.io/social-network",
    },
    {
        id: 2,
        title: "TodoList",
        description: "TodoList is an online platform for organizing your personal or work tasks which can help you to increase the productivity, prioritise tasks, manage tasks effectively and improve time management.",
        github: "https://github.com/V-Sugak/Todolist",
        githubPage: "",
    },
    {
        id: 3,
        title: "Cards",
        description: "Cards is application which help to learn whatever you want. You can make your own packs or use packs of other users, sort or delete them. For every card you can grade your answer.",
        github: "https://github.com/V-Sugak/Cards",
        githubPages: "https://v-sugak.github.io/Cards",
    },
]

export const Projects = () => {
    return <div className={style.projectsBlock}>
        <div className={`${styleContainer.container} ${style.projectsContainer}`}>
            <Title title={'My projects'}/>
            <div className={style.projects}>
                {projects.map(p => {
                    return <Project
                        key={p.id}
                        title={p.title}
                        description={p.description}
                        github={p.github}
                        githubPages={p.githubPages}
                    />
                })}
            </div>
        </div>
    </div>
}