import style from "./Footer.module.css";
import React from "react";
import styleContainer from "../common/styles/Container.module.css";


export const Footer = () => {
    return <div className={style.footerBlock}>
        <div className={`${styleContainer.container}  ${style.footerContainer}`}>
            <div className={style.icons}>
                <div className={style.icon}></div>
                <div className={style.icon}></div>
                <div className={style.icon}></div>
            </div>
            <div>
                © 2021. All rights reserved by Sugak Viktoryia
            </div>
        </div>
    </div>
}