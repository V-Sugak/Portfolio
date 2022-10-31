import React from "react";
import style from "./Main.module.scss";
import photo from "../assets/image/myPhoto.jpg"
import {Button} from "../common/components/button/Button";

export const Main = () => {
    return <div className={style.mainBlock}>
        <div className={style.container}>
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