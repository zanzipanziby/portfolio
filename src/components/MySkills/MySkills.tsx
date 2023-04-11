import React from 'react';
import s from "./MySkills.module.scss"
import {Skill} from "./Skill/Skill";
import {AiFillHtml5} from "react-icons/ai";
import {AiOutlineCloudServer} from "react-icons/ai";
import {DiCss3, DiJavascript1} from "react-icons/di";
import {FaReact} from "react-icons/fa";
import {VscDebugAll} from "react-icons/vsc";
import {SiRedux} from "react-icons/si";
import {BsGit} from "react-icons/bs";
import {Title} from "../Title/Title";
import {Fade} from "react-awesome-reveal";


type SkillType = {
    id: string
    title: string
    description: string
    icon: JSX.Element
}

export const MySkills = () => {
    const mySkills: SkillType[] = [
        {
            id: '1',
            title: "HTML",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            icon: <AiFillHtml5/>
        },
        {
            id: '2',
            title: "CSS",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            icon: <DiCss3/>
        },
        {
            id: '3',
            title: "JavaScript/TypeScript",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            icon: <DiJavascript1/>
        },
        {
            id: '4',
            title: "React",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            icon: <FaReact/>
        },
        {
            id: '5',
            title: "Redux",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            icon: <SiRedux/>
        },
        {
            id: '6',
            title: "REST API",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            icon: <AiOutlineCloudServer/>
        },
        {
            id: '7',
            title: "Version Control and Git",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            icon: <BsGit/>
        },
        {
            id: '8',
            title: "Testing and Debugging",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            icon: <VscDebugAll/>
        },
    ]

    const mySkillsRender = mySkills.map(s => {
        return (

            <Fade direction={"up"} triggerOnce>
                <Skill key={s.id} icon={s.icon} title={s.title} description={s.description}/>
            </Fade>

        )
    })
    return (

        <div className={s.mySkillsWrapper}>


            <div className={s.contentContainer}>


                <Title title={"My Skills"} titleRepeat={"Skills"}/>

                <div className={s.mySkillsContainer}>
                    {mySkillsRender}
                </div>

            </div>
        </div>
    );
};

