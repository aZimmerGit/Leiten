import { createStore, combineReducers, applyMiddleware } from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import placesReducer from './placesReducer'
import curPlaceReducer from './curPlaceReducer'


const reducer = combineReducers({
  places: placesReducer,
  curPlace: curPlaceReducer,
  // initialRegion: {
  //   latitude: 41.8900,
  //   longitude: -87.6570,
  //   latitudeDelta: 0.1960,
  //   longitudeDelta: 0.0421,
  // },
})

const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))

const store = createStore(reducer, middleware)

export default store
