import { QueryPais_pais } from 'graphql/generated/pais'

export const setPais = (data: QueryPais_pais) => ({
  type: 'PAIS_SET',
  payload: data
})
