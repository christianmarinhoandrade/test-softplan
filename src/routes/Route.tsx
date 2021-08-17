/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Redirect, Route as ReactRoute } from 'react-router-dom'

import { RouteMergeProps } from 'utils/merge-routes'

import DefaultLayout from 'pages/_layouts'

function Route(props: RouteMergeProps) {
  const { component, path, location } = props
  const Component = component as React.ElementType

  const Layout = DefaultLayout
  if (location!.pathname === '/') return <Redirect to="/pais/list" />
  return (
    <ReactRoute
      path={path}
      render={() => (
        <Layout>
          <Component />
        </Layout>
      )}
    />
  )
}

export default Route
