import React from 'react';
import s from './Contacts.module.scss'
import {Title} from "../Title/Title";
import {Form} from "./Form/Form";
import {PhotoContainer} from "../../common/components/PhotoContainer/PhotoContainer";
import {Fade} from 'react-reveal'


export const Contacts = () => {

    return (
        <div className={s.pageWrapper} id={"contacts"}>


            <div className={s.contentContainer}>
                <Title title={"Contact Me"} titleRepeat={"Contacts"}/>


                <div className={s.contactsContainer}>
                    <Fade left>
                        <PhotoContainer/>
                    </Fade>
                    <Fade right>
                        <Form/>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

