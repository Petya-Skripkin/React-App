import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import _get from "lodash/get";

import classes from './styles.module.scss';

export interface IMenuItem {
  name: string;
  link: string;
}

interface IProps {
  menuItems: IMenuItem[];
  logo?: string;
}

function Header({ menuItems, logo }: IProps) {
  const history = useHistory();
  const path = _get(history, "location.pathname", "/");

  return (
    <div className={classes.content}>
      <div className={classes.icon}>{!!logo && <img src={logo} alt="" />}</div>
      <div className={classes.main}>
        <div className={classes.label}>My Account</div>
        <ul className={classes.menu}>
          {menuItems.map((item) => (
            <NavLink className= {
              path === item.link ? classes.active : classes.menu__label
            } to={item.link}><li>{item.name}</li></NavLink>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header;