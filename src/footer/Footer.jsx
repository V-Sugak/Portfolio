import style from "./Footer.module.scss";
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
                © 2022 All rights reserved
            </div>
        </div>
    </div>
}