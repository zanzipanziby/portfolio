import React from 'react';
import {Project} from "./Project/Project";
import s from "./MyProjects.module.scss"
import todo from '../../assets/jpg/projects/Todo.jpg'
import social from '../../assets/jpg/projects/socialNetwork.png'
import {Title} from "../Title/Title";


type MyProjectType = {
    id: string
    title: string
    description: string
    background: string
}
export const MyProjects = () => {
    const myProjects: MyProjectType[] = [
        {
            id: "1",
            title: "Todolist",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            background: todo
        },
        {
            id: "2",
            title: "Social-network",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            background: social
        },
    ];

    const myProjectRender = myProjects.map(p => {
        return (
            <Project
                key={p.id}
                title={p.title}
                description={p.description}
                background={p.background}
            />)
    })

    return (
        <div className={s.myProjectsWrapper}>
            <div className={s.contentContainer}>
                <Title title={"My Projects"} titleRepeat={"Projects"}/>
                <div className={s.myProjectsContainer}>
                    {myProjectRender}
                </div>
            </div>
        </div>
    );
};

