import { Button, Box, makeStyles  } from '@material-ui/core'    
import Card from './Card'
import Minicard from './Minicard'
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
  return (<>
    <Box className={classes.box}  >
      <Button variant='contained' color='primary' onClick={toggle}   >
        VOLVER AL PERFIL  
      </Button>
    </Box>
    <Box className={classes.backgroundCard}>
      <Minicard/>
      <Card/>
    </Box>
  </>
  )
}
