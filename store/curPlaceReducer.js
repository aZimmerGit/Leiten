
//action define
const SET_CURPLACES = 'SETCURPLACES'

//action create
export const setCurPlace = curPlace => {
  return {type: SET_CURPLACES, curPlace}
}

//thunk

//reducer
export default function (curPlace = {}, action) {
  switch (action.type) {
    case SET_CURPLACES:
      return action.curPlace
    default:
      return curPlace
  }
}
