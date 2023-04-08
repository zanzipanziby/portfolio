import React from 'react';
import s from './Contacts.module.scss'
import {Title} from "../Title/Title";
import {Form} from "./Form/Form";
import {PhotoContainer} from "../../common/components/PhotoContainer/PhotoContainer";

export const Contacts = () => {
    return (
        <div className={s.pageWrapper}>
            <div className={s.contentContainer}><Title title={"Contact Me"} titleRepeat={"Contacts"}/>
                <div className={s.contactsContainer}>
                    <PhotoContainer/>
                    <Form/>
                </div>
            </div>
        </div>
    );
};

