import React from 'react';
import s from "./Home.module.scss"

import {ParticlesContainer} from "../../common/components/Particles/ParticlesContainer";
import {Fade} from "react-reveal";
import ReactTypingEffect from "react-typing-effect";

export const Home = () => {


    return (

        <div className={s.home} id={"home"}>
            <ParticlesContainer classname={s.particles}/>

            <div className={s.contentContainer}>


                <div className={s.mainTextContainer}>
                    <Fade left>
                        <div>
                            <p className={s.hello}>Hi there</p>
                            <h1 className={s.mainTitle}>I am <span>Dmitry Markevich</span></h1>
                            {/*<p className={s.description}>A Frontend Developer </p>*/}
                            <ReactTypingEffect
                                className={s.description}
                                text={"Frontend Developer"}
                                speed={200}
                                eraseSpeed={200}
                            />
                        </div>
                    </Fade>
                </div>


            </div>
        </div>

    );
};

