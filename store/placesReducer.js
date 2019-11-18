import firebase from '../firebase/firebase'
import firestoreDb from '../firebase/firestore'
import storage from './memStore'



//initial state (fallback)
const initialPlaces = storage

//action define
const SET_PLACES = 'SETPLACES'

//action create
export const setPlaces = places => {
  return {type: SET_PLACES, places}
}

//thunk
export const fetchAllPlaces = () => {
  return async dispatch => {
    try {
      let retArr = []
      const querySnapshot = await firestoreDb.collection("places").get()
      querySnapshot.forEach(function(doc){
        retArr.push(doc.data())
      })
      dispatch(setPlaces(retArr))
    }catch(error){console.log(error)}
  }
}

//reducer
export default function (places = initialPlaces, action) {
  switch (action.type) {
    case SET_PLACES:
      return [...action.places]
    default:
      return places
  }
}
