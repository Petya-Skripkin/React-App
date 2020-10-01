import { IMenuItem } from './components/app-route/app-header/app-header';

import urls from './urls';

export const CUSTOMER_MENU: IMenuItem[] = [
  {
    name: 'Главная',
    link: urls.HOME,
  },
  {
    name: 'О нас',
    link: urls.ABOUTAS,
  },
  {
    name: 'Контакты',
    link: urls.CONTACTS,
  }
];
