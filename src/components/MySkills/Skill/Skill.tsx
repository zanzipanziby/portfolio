import React from 'react';
import s from "./Skill.module.scss"
import Tilt from 'react-parallax-tilt'




type SkillPropsType = {
    title: string,
    description: string
    icon: JSX.Element
}
export const Skill = (props: SkillPropsType) => {

    return (

        <Tilt glareEnable glarePosition="all" glareBorderRadius={"0"} scale={1.1} transitionSpeed={2500}>
            <div className={s.skillWrapper}>
                <div className={s.iconContainer}>{props.icon}</div>
                <div className={s.textContainer}>
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                </div>
            </div>
        </Tilt>

    );
};

