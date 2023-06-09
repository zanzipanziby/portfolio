import React from 'react';
import {Project} from "./Project/Project";
import s from "./MyProjects.module.scss"
import todo from '../../assets/jpg/projects/Todo.jpg'
import social from '../../assets/jpg/projects/socialNetwork.png'
import {Title} from "../Title/Title";
import {Fade} from "react-reveal";
import Tilt from "react-parallax-tilt";


type MyProjectType = {
    id: string
    title: string
    description: string
    background: string
    link: string
}
export const MyProjects = () => {
    const myProjects: MyProjectType[] = [
        {
            id: "1",
            title: "Todolist",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            background: todo,
            link: "https://zanzipanziby.github.io/todolist-redux-handmade"
        },
        {
            id: "2",
            title: "Social-network",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            background: social,
            link: "https://zanzipanziby.github.io/samurai-way-again"
        },
    ];

    const myProjectRender = myProjects.map(p => {
        return (
            <Fade bottom>
                <Tilt scale={1.1} tiltEnable={false}>
                    <Project
                        key={p.id}
                        title={p.title}
                        description={p.description}
                        background={p.background}
                        link={p.link}
                    />
                </Tilt>
            </Fade>
        )
    })

    return (
        <div className={s.myProjectsWrapper} id={"projects"}>
            <div className={s.contentContainer}>
                <Title title={"My Projects"} titleRepeat={"Projects"}/>
                <div className={s.myProjectsContainer}>
                    {myProjectRender}
                </div>
            </div>
        </div>
    );
};

