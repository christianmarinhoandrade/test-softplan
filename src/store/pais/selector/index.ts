import { QueryPais_pais } from 'graphql/generated/pais'

type Selector = {
  pais: { data: QueryPais_pais[] }
}
export const paisSelector = (state: Selector) => {
  return state.pais.data
}
