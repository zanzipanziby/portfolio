import React, {useState} from 'react';
import s from "./Header.module.scss"
import {GiHamburgerMenu} from "react-icons/gi";

export const Header = () => {
    const [isActive,setIsActive] = useState(false)
    const onClickHandler = () => {
        setIsActive(!isActive)
    }
    return (
        <header className={s.navContainer}>
            <nav className={s.contentContainer}>
                <ul className={!isActive ? s.nav : s.nav + ' ' + s.burgerNav}>
                    <li>
                        <a href={"#"}>Home</a>
                    </li>
                    <li>
                        <a href={"#"}>Skills</a>
                    </li>
                    <li>
                        <a href={"#projects"}>Project</a>
                    </li>
                    <li>
                        <a href={"#"}>Contacts</a>
                    </li>
                </ul>

             {/*<LinksToSocialNetworks/>*/}
                <div className={s.burger} onClick={onClickHandler}><GiHamburgerMenu/></div>
            </nav>
        </header>
    );
};


