import React from 'react';
import s from "./Home.module.scss"

export const Home = () => {
    return (
        <div className={s.home}>

            <div className={s.contentContainer}>
                <div className={s.mainTextContainer}>
                    <p className={s.hello}>Hi there</p>
                    <h1 className={s.mainTitle}>I am <span>Dmitry Markevich</span></h1>
                    <p className={s.description}>A Frontend Developer </p>
                </div>
            </div>
        </div>
    );
};

