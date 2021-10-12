//React
import { createStore } from "redux"

//Reducers
import reducer from "../features/Form"

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer, reduxDevtools)

export default store