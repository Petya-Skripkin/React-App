import React from 'react';

import classes from './styles.module.scss';

interface ICurrency {
  bay: number;
  icon: string;
  sale: number;
}

interface IProps {
  currency: ICurrency[];
}

function Currency({ currency }: IProps) {
  return (
    <div className={classes.conteiner}>
      <p>Обмена валют:</p>
      {currency.map(item => (
        <div className={classes.content}>
          <span>{item.bay}</span>
          <img src={item.icon} alt="" />
          <span>{item.sale}</span>
        </div>
      ))}
    </div>
  )
}

export default Currency;