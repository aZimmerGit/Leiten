import axios from 'axios'
import storage from './memStore'


//initial state (fallback?)
const initialPlaces = storage

//action define
const SET_PLACES = 'SETPLACES'

//action create
export const setPlaces = places => {
  return {type: SET_PLACES, places}
}

//thunk

//reducer
export default function (places = initialPlaces, action) {
  switch (action.type) {
    case SET_PLACES:
      return [...action.places]
    default:
      return places
  }
}
