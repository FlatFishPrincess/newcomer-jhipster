import { AUTHORITIES } from 'app/config/constants';
import Entities from 'app/entities';
import Activate from 'app/modules/account/activate/activate';
import PasswordResetFinish from 'app/modules/account/password-reset/finish/password-reset-finish';
import PasswordResetInit from 'app/modules/account/password-reset/init/password-reset-init';
import Register from 'app/modules/account/register/register';
import Modules from 'app/modules/entities';
import Home from 'app/modules/home/home';
import Login from 'app/modules/login/login';
import Logout from 'app/modules/login/logout';
import PrivateRoute from 'app/shared/auth/private-route';
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import PageNotFound from 'app/shared/error/page-not-found';
import React from 'react';
import Loadable from 'react-loadable';
import { Switch } from 'react-router-dom';

// tslint:disable:space-in-parens
const Account = Loadable({
  loader: () => import(/* webpackChunkName: "account" */ 'app/modules/account'),
  loading: () => <div>loading ...</div>
});

const Admin = Loadable({
  loader: () => import(/* webpackChunkName: "administration" */ 'app/modules/administration'),
  loading: () => <div>loading ...</div>
});
// tslint:enable

const Routes = () => (
  <div className="view-routes">
    <Switch>
      <ErrorBoundaryRoute path="/login" component={Login} />
      <ErrorBoundaryRoute path="/logout" component={Logout} />
      <ErrorBoundaryRoute path="/register" component={Register} />
      <ErrorBoundaryRoute path="/activate/:key?" component={Activate} />
      <ErrorBoundaryRoute path="/reset/request" component={PasswordResetInit} />
      <ErrorBoundaryRoute path="/reset/finish/:key?" component={PasswordResetFinish} />
      <PrivateRoute path="/admin" component={Admin} hasAnyAuthorities={[AUTHORITIES.ADMIN]} />
      <PrivateRoute path="/account" component={Account} hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.USER]} />
      <PrivateRoute path="/entity" component={Entities} hasAnyAuthorities={[AUTHORITIES.USER]} />
      <PrivateRoute path="/modules" component={Modules} hasAnyAuthorities={[AUTHORITIES.USER]} />
      <ErrorBoundaryRoute path="/" exact component={Home} />
      <ErrorBoundaryRoute component={PageNotFound} />
    </Switch>
  </div>
);

export default Routes;
