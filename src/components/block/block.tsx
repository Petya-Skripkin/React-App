import React from 'react';

import classes from './styles.module.scss';

interface IProps {
  icon: string;
  title: string;
}

function Block({ icon, title }: IProps) {
  return (
    <div className={classes.conteiner}>
      <img className={classes.flag} src='flag.png' alt=" " />
      <img className={classes.icon} src={icon} alt=" " />
      <div className={classes.title}>{title}</div>
    </div>
  )
}

export default Block;