import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import NewComer from './new-comer';
import NewComerDetail from './new-comer-detail';
import NewComerUpdate from './new-comer-update';
import NewComerDeleteDialog from './new-comer-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={NewComerUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={NewComerUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={NewComerDetail} />
      <ErrorBoundaryRoute path={match.url} component={NewComer} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={NewComerDeleteDialog} />
  </>
);

export default Routes;
