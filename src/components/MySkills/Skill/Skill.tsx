import React from 'react';
import s from "./Skill.module.scss"


type SkillPropsType = {
    title: string,
    description: string
    icon: JSX.Element
}
export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skillWrapper}>
            <div className={s.iconContainer}>{props.icon}</div>
            <div className={s.textContainer}>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

