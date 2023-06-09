import React, {useState} from 'react';
import s from "./Project.module.scss"

type ProjectPropsType = {
    title: string
    description: string
    background: string
    link: string
}

export const Project = (props: ProjectPropsType) => {
    const [isVisible, setIsVisible] = useState(false)

    const onMouseEnterHandler = () => {
        setIsVisible(true)
    }
    const onMouseLeaveHandler = () => {
        setIsVisible(false)
    }


    return (
        <div className={s.projectWrapper}>
            <div className={s.projectLogoContainer} style={{backgroundImage: `url(${props.background})`}}>
                {isVisible && <div className={s.shading}></div>}
                <a
                    target={'_blank'}
                    className={s.projectLink}
                    href={props.link}
                    onMouseEnter={onMouseEnterHandler}
                    onMouseLeave={onMouseLeaveHandler} rel="noreferrer"
                >
                    View
                </a>
            </div>
            <div className={s.projectDescriptionContainer}>
                <h4 className={s.projectTitle}><span>{props.title}</span></h4>
                <p className={s.projectDescription}>{props.description}</p>
            </div>
        </div>
    );
};

