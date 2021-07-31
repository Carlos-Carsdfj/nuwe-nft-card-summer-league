import { useState } from 'react'
import { Button, Box, makeStyles } from '@material-ui/core'    
import Card from './Card'
import QrCard from './QrCard'
import Minicard from './Minicard'
import  ReactCardFlip  from 'react-card-flip'

const useStyles = makeStyles((theme) => ({
  box:{
    display:'flex',
    padding:20,
    marginBottom:10,
  },
  buttonToBack:{
  
    [theme.breakpoints.down('sm')]:{
      width:'80%',
      margin:'auto'
    },
  },
  backgroundCard:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:25,
    [theme.breakpoints.down('sm')]:{
      flexDirection:'column'

    },
  
    background: 'radial-gradient(38.54% 47.46% at 50% 50%, #4F934A 0%, rgba(63, 226, 51, 0.42) 0.01%, rgba(79, 147, 74, 0) 100%)',
    backgroundPosition: 'center center',
   
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
      <Button variant='contained' color='primary' onClick={toggle}   
        className={classes.buttonToBack}
      >
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
