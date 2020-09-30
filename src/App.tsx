import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import './App.scss';

import * as Component from './components';
import * as Pages from './pages';

import { CUSTOMER_MENU } from './mock';
import urls from './urls';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Component.AppRoute logo='' menuItems={CUSTOMER_MENU} path= {urls.ABOUTAS} component={Pages.AboutAs} />
        <Component.AppRoute logo='' menuItems={CUSTOMER_MENU} path= {urls.CONTACTS} component={Pages.Contacts} />
        <Component.AppRoute logo='' menuItems={CUSTOMER_MENU} path= {urls.HOME} component={Pages.Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
