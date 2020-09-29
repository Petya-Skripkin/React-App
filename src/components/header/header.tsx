import React from 'react';
import classes from './styles.module.scss';

function Header() {
    return (
    <div className={classes.content}>
        <div className={classes.icon}></div>
        <div className={classes.main}>
            <div className={classes.label}>My Account</div>
            <ul className={classes.menu}>
                <li className={classes.menu__label}>Главная</li>
                <li className={classes.menu__label}>О нас</li>
                <li className={classes.menu__label}>Контакты</li>
            </ul>
        </div>
    </div>
    )
}

export default Header;