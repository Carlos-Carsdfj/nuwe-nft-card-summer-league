import { useState } from 'react'
import { Button, Box, makeStyles  } from '@material-ui/core'    
import Card from './Card'
import QrCard from './QrCard'
import Minicard from './Minicard'
import  ReactCardFlip  from 'react-card-flip'

const useStyles = makeStyles(() => ({
  box:{
    marginTop:20
  },
  backgroundCard:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:25,
    minHeight:'80vh'
  }
})
)

export default function Normal({ toggle }) {
  
  const classes = useStyles()
  const [ isFlip, setIsFlip  ] = useState(false)
  
  const toggleFlip = ()=>{
    setIsFlip(prev=>!prev)
  }

  return (<>
    <Box className={classes.box}  >
      <Button variant='contained' color='primary' onClick={toggle}   >
        VOLVER AL PERFIL  
      </Button>
    </Box>
    <Box className={classes.backgroundCard}>
      <Minicard/>
      <ReactCardFlip isFlipped={isFlip} flipDirection="horizontal" >  
        <Card toggle={toggleFlip} />
        <QrCard toggle={toggleFlip}/>
      </ReactCardFlip>
    </Box>
  </>
  )
}
