//initial state (fallback)
const initialRegion = {
  latitude: 41.8900,
  longitude: -87.6570,
  latitudeDelta: 0.1960,
  longitudeDelta: 0.0421,
}

//action define
const SET_REGION = 'SET_REGION'

//action create
export const setRegion = region => {
  return {type: SET_REGION, region}
}

//thunk
// export const fetchAllPlaces = () => {
//   return async dispatch => {
//     try {
//       let retArr = []
//       const querySnapshot = await firestoreDb.collection("places").get()
//       querySnapshot.forEach(function(doc){
//         retArr.push(doc.data())
//       })
//       dispatch(setPlaces(retArr))
//     }catch(error){console.log(error)}
//   }
// }

//reducer
export default function (region = initialRegion, action) {
  switch (action.type) {
    case SET_REGION:
      return action.region
    default:
      return region
  }
}
