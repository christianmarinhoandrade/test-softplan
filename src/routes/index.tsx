import { Switch } from 'react-router-dom'

import Route from './Route'

import routes, { RouteMergeProps } from 'utils/merge-routes'

import NotFound from 'components/Notfound'

function Routes() {
  return (
    <Switch>
      {routes.map((route: RouteMergeProps) => (
        <Route
          key={route.name}
          path={route.path}
          component={route.component}
          exact
        />
      ))}

      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes
