import React from "react";
import style from "./Contacts.module.scss"
import styleContainer from "../common/styles/Container.module.scss";
import {Title} from "../common/components/title/Title";
import phone from "../assets/image/icons-contacts/phon.png";
import email from "../assets/image/icons-contacts/email.png";

const contactsData = [
    {id: 1, icon: phone, title: "Phone:", description: "+375(33) 630 68 43"},
    {id: 2, icon: email, title: "Email:", description: "tory.korbit@yandex.ru"},
]

export const Contacts = () => {
    return <div className={style.contactsBlock}>
        <div className={`${styleContainer.container}  ${style.contactsContainer}`}>
            <Title title={'Contact'}/>
            <div className={style.contacts}>
                <form className={style.contactsForm}>
                    <div className={style.contact}>
                        <input type="text" placeholder={'Email'}/>
                        <input type="text" placeholder={'Name'}/>
                        <textarea placeholder={'Enter your message'}></textarea>
                    </div>
                    <div className={style.buttonContainer}>
                        <button type={'submit'} className={style.btn}>Send message</button>
                    </div>
                </form>

                <div className={style.data}>
                    {contactsData.map(contact => {
                        return <div key={contact.id} className={style.contactsData}>
                            <img className={style.img} src={contact.icon}/>
                            <h5 className={style.title}>{contact.title}</h5>
                            <div className={style.description}>{contact.description}</div>
                        </div>
                    })}
                </div>
            </div>

        </div>
    </div>
}