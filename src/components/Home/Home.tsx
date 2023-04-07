import React from 'react';
import s from "./Home.module.css"

export const Home = () => {
    return (
        <div className={s.home}>
            <div className={s.mainTextContainer}>
                <div className={s.hello}>Hi there</div>
                <h1>I am <span>Dmitry Markevich</span></h1>
                <div>A Frontend Developer</div>
            </div>
            <div className={s.photoContainer}></div>
        </div>
    );
};

