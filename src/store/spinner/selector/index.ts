type Selector = {
  spinner: { load: boolean }
}
export const spinnerSelector = (state: Selector) => {
  return state.spinner.load
}
