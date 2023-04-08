import React from 'react';
import s from './Title.module.scss'

type TitlePropsType = {
    title: string
    titleRepeat: string
}

export const Title = (props: TitlePropsType) => {
    return (
        <div className={s.pageTitleContainer}>
           <h2 className={s.title}>{props.title}</h2>
            <h2 className={s.titleRepeat}>{props.titleRepeat}</h2>
        </div>
    );
};

