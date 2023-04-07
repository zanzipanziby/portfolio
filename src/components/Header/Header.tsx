import React from 'react';
import s from "./Header.module.css"

export const Header = () => {
    return (
        <div className={s.navContainer}>
            <ul className={s.nav}>
                <li>
                    <a href={"#"}>Home</a>
                </li>
                <li>
                    <a href={"#"}>Skills</a>
                </li>
                <li>
                    <a href={"#"}>Project</a>
                </li>
                <li>
                    <a href={"#"}>Contacts</a>
                </li>
            </ul>
            <ul className={s.nav}>
                <li>Gmail</li>
                <li>GitHub</li>
                <li>Telegram</li>
            </ul>
        </div>
    );
};


