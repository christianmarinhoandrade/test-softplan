/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { QueryPais_pais } from 'graphql/generated/pais'
type DataReducer = { data: QueryPais_pais[] }
const defaultState: DataReducer = {
  data: []
}

type Action = {
  type: 'PAIS_SET'
  payload: QueryPais_pais
}

const paisReducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    case 'PAIS_SET': {
      const result = state.data.find((item) => item._id === action.payload._id)
      const data = result
        ? state.data.map((item: QueryPais_pais) =>
            result!._id === item._id ? action.payload : item
          )
        : [...state.data, action.payload]
      return {
        ...state,
        data
      }
    }
    default:
      return state
  }
}

export default paisReducer
