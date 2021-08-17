import PaisEdit from './containers/pais.edit.container'
import PaisView from './containers/pais.view.container'
import PaisList from './containers/pais.list.container'

const routes = [
  { path: '/pais/edit/:id', component: PaisEdit },
  { path: '/pais/view/:id', component: PaisView },
  { path: '/pais/list', component: PaisList }
]

export default routes
