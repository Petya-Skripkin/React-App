import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './styles.module.scss';

interface IArray {
    name: string;
    link: string;
}

interface IProps {
    array: IArray[];
    src: string;
}

function Header({ array, src }: IProps) {
    return (
        <div className={classes.content}>
            <div className={classes.icon}><img src={src} alt=" " /></div>
            <div className={classes.main}>
                <div className={classes.label}>My Account</div>
                <ul className={classes.menu}>
                    {array.map((item) => (
                        <li className={classes.menu__label}><NavLink to={item.link}>{item.name}</NavLink></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Header;