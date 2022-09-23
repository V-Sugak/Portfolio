import React from "react";
import style from "./Main.module.scss";
import styleContainer from "./../common/styles/Container.module.css";
import photo from "./myPhoto.jpg"
import {Button} from "../common/components/button/Button";

export const Main = () => {
    return <div className={style.mainBlock}>
        <div className={`${styleContainer.container} ${style.mainContainer}`}>
            <div className={style.descriptionContainer}>
                <div className={style.titleContainer}>
                    <h1 className={style.title}>Hello,</h1>
                    <h1 className={style.title}>I'm Sugak Viktoryia</h1>
                    <p className={style.text}>FRONT-END DEVELOPER</p>
                </div>
                <Button title={'Download CV'}/>
            </div>
            <div className={style.photoContainer}>
                <img className={style.photo} src={photo} alt=""/>
            </div>
        </div>
    </div>
}