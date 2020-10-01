import React from 'react';

import AppHeader, { IMenuItem } from './app-header/app-header';
import classes from './styles.module.scss';

interface IProps {
  children: React.ReactElement | React.ReactElement[];
  logo: string;
  menuItems: IMenuItem[];
}

const AppLayout = ({ children, logo, menuItems }: IProps) => (
  <div>
    <AppHeader logo={logo} menuItems={menuItems} />
    <div className={classes.container}>{children}</div>
  </div>
);

export default AppLayout;
