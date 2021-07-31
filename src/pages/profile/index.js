import { useState  } from 'react'
import Normal from 'components/User/Normal'
import Nft from 'components/User/Nft'

export default function Profile() {
  
  const [ isVisible, setIsVisible  ] = useState(false)

  const toggle = () =>{
    setIsVisible( prev => !prev )
  }

  return (<>
    {
      isVisible ?
        <Nft toggle={toggle}/>
        :<Normal toggle={toggle}/>
    }
  </>)
}
