import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.scss';

import * as Component from './components';
import * as Pages from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Component.Header
          src=""
          array={[
            { name: 'Главная', link: "/main" },
            { name: 'О нас', link: "/about-as" },
            { name: 'Контакты', link: "/contacts" },
          ]}
        />
        <Route path='/main' component={Pages.Main} />
        <Route path='/about-as' component={Pages.AboutAs} />
        <Route path='/contacts' component={Pages.Contacts} />
        <Route />
      </div>
    </BrowserRouter>
  );
}

export default App;
