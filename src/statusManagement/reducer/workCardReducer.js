import { TYPES} from './types'

const card =  {

}
const reducer = ( state = card, action ) => {
  switch (action.type) {
  case TYPES.ADD_NEW_WORK_CARD:
    return{
      ...action.payload
    }
  case TYPES.LOGOUT:
    return card
  default:
    return state
  }
}
export default reducer
