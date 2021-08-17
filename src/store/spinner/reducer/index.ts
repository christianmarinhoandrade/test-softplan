const defaultState = {
  load: false
}

type Action = {
  type: 'SPINNER_SET'
  payload: { load: boolean }
}

const spinnerReducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    case 'SPINNER_SET':
      return {
        ...state,
        load: action.payload.load
      }
    default:
      return state
  }
}

export default spinnerReducer
