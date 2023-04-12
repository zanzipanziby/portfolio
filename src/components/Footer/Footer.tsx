import React from 'react';
import s from './Footer.module.scss'

export const Footer = () => {
    return (
        <div className={s.pageWrapper}>
            <div className={s.contentContainer}>
                <footer className={s.footer}>

                    <p>Copyright © 2023 All rights reserved</p>
                    <p>Designed by Evgeniy Kondratenko</p>
                </footer>

            </div>
        </div>
    );
};

