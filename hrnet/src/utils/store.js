//React
import { combineReducers, createStore } from "redux"

//Reducers
import FormReducer from "../features/Form"

const reducer = combineReducers({
    Form: FormReducer
})

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer, reduxDevtools)

export default store