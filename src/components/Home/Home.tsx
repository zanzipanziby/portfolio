import React from 'react';
import s from "./Home.module.scss"

import {ParticlesContainer} from "../../common/components/Particles/ParticlesContainer";
import {Fade} from "react-awesome-reveal";

export const Home = () => {


    return (

        <div className={s.home}>
            <ParticlesContainer classname={s.particles}/>

            <div className={s.contentContainer}>


                <div className={s.mainTextContainer}>
                    <Fade direction={"left"} triggerOnce>
                        <p className={s.hello}>Hi there</p>
                        <h1 className={s.mainTitle}>I am <span>Dmitry Markevich</span></h1>
                        <p className={s.description}>A Frontend Developer </p>
                    </Fade>
                </div>


            </div>
        </div>

    );
};

