import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { userLogin, userLogout } from 'statusManagement/reducer/actions'
import  { userAuth } from 'statusManagement/firebase'



const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn ] = useState(false)
  const [checking, setChecking ] = useState(true)
  const [ uid, setUid] = useState(0)
  const history = useHistory()
  const dispatch = useDispatch()
  
  useEffect(() => {
    const unregisterAuthObserver = userAuth.onAuthStateChanged(user => {
      setIsLoggedIn(!!user)
      if(!user ){
        setUid(0) && history.push('/login') 
        
      }else{
        setUid(user.uid)
      }
    })
    return () => unregisterAuthObserver()
  },[history])
    
  useEffect(() => {
    isLoggedIn && dispatch(userLogin()) 
    setChecking(false)
  }, [isLoggedIn,dispatch])

  const logout = () => {
    dispatch(userLogout())
  }

  
  return {
    checking,
    isLoggedIn,
    logout,
    uid
  }
}

export default useAuth
