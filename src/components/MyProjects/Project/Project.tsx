import React, {useState} from 'react';
import s from "./Project.module.scss"

type ProjectPropsType = {
    title: string
    description: string
    background: string
}

export const Project = (props: ProjectPropsType) => {
    const [isVisible,setIsVisible] = useState(false)

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
                <a className={s.projectLink} href="#" onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
                    View
                </a>
            </div>
            <div className={s.projectDescriptionContainer}>
                <h4 className={s.projectTitle}>{props.title}</h4>
                <p className={s.projectDescription}>{props.description}</p>
            </div>
        </div>
    );
};

