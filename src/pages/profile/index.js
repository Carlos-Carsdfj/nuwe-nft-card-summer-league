import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import { getCards, } from 'statusManagement/reducer/actions'
import { checkUser } from 'statusManagement/firebase'
import PersonalCard from 'components/PersonalCard'
import WorkCard from 'components/WorkCard'
     
export default function Profile() {

  const [checking, setChecking ] = useState(true)
  const dispatch = useDispatch()
  const { uid } = useParams()
  const isUid = checkUser(uid)

  useEffect(() => {
    setChecking(true)
    dispatch(getCards(uid))
      .then(
        setChecking(false)
      )
  },[uid,dispatch])

  return (
    <div className='profile-page'>
      { checking? <h2>Loading ...</h2>
        :<>
          <PersonalCard isUid={isUid}/>
          <WorkCard/>
        </>
      }
    </div>
  )
}
