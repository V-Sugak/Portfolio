import style from "./Footer.module.scss";
import React from "react";
import styleContainer from "../common/styles/Container.module.css";
import vk from "./icon-social/vk.svg"
import instagram from "./icon-social/insta.svg"
import linkedin from "./icon-social/linkedin.svg"

const social = [
    {id: 1, image: vk, href: 'https://vk.com/id289699152'},
    {id: 1, image: instagram, href: 'https://www.instagram.com/sugak_victoria/'},
    {id: 1, image: linkedin, href: 'https://www.linkedin.com/in/viktoryia-sugak-0b2579223/'},

]


export const Footer = () => {
    return <div className={style.footerBlock}>
        <div className={`${styleContainer.container}  ${style.footerContainer}`}>
            <div className={style.icons}>
                {social.map(s => {
                    return <div key={s.id} className={style.icon}>
                        <a href={s.href}>
                            <img src={s.image}/>
                        </a>
                    </div>
                })}
            </div>
            <div>
                © 2022 All rights reserved
            </div>
        </div>
    </div>
}