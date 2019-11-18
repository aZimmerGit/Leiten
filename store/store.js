import { createStore, combineReducers, applyMiddleware } from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import placesReducer from './placesReducer'
import curPlaceReducer from './curPlaceReducer'
import regionReducer from './regionReducer'


const reducer = combineReducers({
  places: placesReducer,
  curPlace: curPlaceReducer,
  region: regionReducer,

})

const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))

const store = createStore(reducer, middleware)

export default store
