import { TYPES } from '../type'



export const changeAvatar=(name)=>{

  return {
    type:TYPES.CHANGE_AVATAR,
    payload:name
  }
}
