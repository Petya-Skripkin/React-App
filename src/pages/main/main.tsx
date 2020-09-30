import React from 'react';

import * as Component from './../../components';
import classes from "./styles.module.scss";
import { BLOCK__VALUE } from './mock';

function Main() {
  return (
    <>
      <div className={classes.flex__conteiner}>
        <div className={classes.flex__block}>
          {BLOCK__VALUE.map(item => (
            <Component.Block
              icon={item.icon}
              title={item.title}
            />
          ))}
        </div>

        <div className= {classes.flex__conteiner_left}>
          <Component.Currency
            currency={[
              {
                bay: 100,
                icon: "images.png",
                sale: 120
              },
              {
                bay: 100,
                icon: "images.png",
                sale: 120
              }
            ]}
          />
          <Component.LeftBlock
            src="Group-8.png"
            title="Кредит Auto"
          />
          <Component.LeftBlock
            src="Group-8.png"
            title="Кредит Auto"
          />
        </div>
      </div>

    </>
  )
}

export default Main;