import React from "react";
import { Route, RouteProps } from "react-router-dom";

import AppLayout from './app-layaut';
import { IMenuItem } from './app-header/app-header';

interface AppRouteProps extends RouteProps {
  component: React.ComponentType<any>;
  menuItems: IMenuItem[];
  logo: string;
  [props: string]: any;
}

const AppRoute = ({
  component: Component,
  logo,
  menuItems,
  ...rest
}: AppRouteProps) => (
  <Route
    {...rest}
    render={props => (
      <AppLayout logo={logo} menuItems={menuItems}>
        <Component {...props} />
      </AppLayout>
    )}
  />
)

export default AppRoute;