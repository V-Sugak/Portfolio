import React from "react";
import style from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return <div className={style.contactsBlock}>
        <div className={`${styleContainer.container}  ${style.skillsContainer}`}>
            <h2 className={style.title}>Contacts</h2>
            <form className={style.contacts}>
                <input type="text" placeholder={'Email'}/>
                <input type="text" placeholder={'Name'}/>
                <textarea name="" id="" cols="30" rows="10" placeholder={'Enter your message'}></textarea>
                <button type={'submit'} className={style.button}>Send message</button>
            </form>

        </div>
    </div>
}