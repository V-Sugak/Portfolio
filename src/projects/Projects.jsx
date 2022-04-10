import React from "react";
import style from "./Projects.module.css"
import styleContainer from "./../common/styles/Container.module.css"
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";


export const Projects = () => {
    return <div className={style.projectsBlock}>
        <div className={`${styleContainer.container} ${style.projectsContainer}`}>
            <Title title={'My projects'}/>
            <div className={style.projects}>
                <Project title={'Social Network'}
                         description={'It is the most biggest project which I refresh every month and learning new technologies. It helps me to be in trends.'}/>
                <Project title={'Todo List'}
                         description={'This project uses modern libraries, their logic and practical application. And Redux-toolkit contains the best practices of all React developers. This project demonstrates redux-toolkit and its strict limitations.'}/>
                <Project title={'Todo List'}
                         description={'This project uses modern libraries, their logic and practical application. And Redux-toolkit contains the best practices of all React developers. This project demonstrates redux-toolkit and its strict limitations.'}/>
                <Project title={'Todo List'}
                         description={'This project uses modern libraries, their logic and practical application. And Redux-toolkit contains the best practices of all React developers. This project demonstrates redux-toolkit and its strict limitations.'}/>
            </div>
        </div>
    </div>
}