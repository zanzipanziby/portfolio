import React, {useState} from 'react';
import s from "./Header.module.scss"
import {GiHamburgerMenu} from "react-icons/gi";
import {Link} from "react-scroll";

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
                        <Link activeClass={s.active} to={"home"} spy smooth offset={1} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link activeClass={s.active} to={"skills"} spy smooth offset={1} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link activeClass={s.active} to={"projects"} spy smooth offset={1} duration={500}>
                            Project
                        </Link>
                    </li>
                    <li>
                        <Link activeClass={s.active} to={"contacts"} spy smooth offset={1} duration={500}>
                            Contacts
                        </Link>
                    </li>
                </ul>

             {/*<LinksToSocialNetworks/>*/}
                <div className={s.burger} onClick={onClickHandler}><GiHamburgerMenu/></div>
            </nav>
        </header>
    );
};


