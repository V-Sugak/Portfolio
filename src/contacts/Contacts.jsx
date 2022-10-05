import React from "react";
import style from "./Contacts.module.scss"
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";

export const Contacts = () => {
    return <div className={style.contactsBlock}>
        <div className={`${styleContainer.container}  ${style.contactsContainer}`}>
            <Title title={'Contact'}/>

            <form className={style.contacts}>
                <div className={style.contact}>
                    <input type="text" placeholder={'Email'}/>
                    <input type="text" placeholder={'Name'}/>
                    <textarea name="" id="" cols="30" rows="10" placeholder={'Enter your message'}></textarea>
                    {/* <Button type={'submit'} title={"Send message"}/>*/}
                    {/*<button type={'submit'} className={style.button}>Send message</button>*/}
                </div>
                <div className={style.buttonContainer}>
                    <button type={'submit'} className={style.btn}>Send message</button>
                </div>
            </form>

        </div>
    </div>
}