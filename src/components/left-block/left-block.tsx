import React from 'react';

import classes from "./styles.module.scss";

interface IProps {
  src: string;
  title: string;
}

function LeftBlock({ src, title }: IProps) {
  return (
    <div className={classes.conteiner}>
      <img src={src} alt=" " />
      <p>{title}</p>
    </div>
  )
}

export default LeftBlock;