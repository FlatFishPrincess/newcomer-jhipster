import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import React from 'react';
import { Switch } from 'react-router-dom';

import NewComerDeleteDialog from './components/new-comer-delete-dialog';
import NewComerDetail from './components/new-comer-detail';
import NewComer from './components/new-comer-list';
import NewComerUpdate from './components/new-comer-update';
import NewComerCreate from './container/new-comer-create';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={NewComerCreate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={NewComerUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={NewComerDetail} />
      <ErrorBoundaryRoute path={match.url} component={NewComer} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={NewComerDeleteDialog} />
  </>
);

export default Routes;
