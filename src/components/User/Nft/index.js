import { Button, Box, makeStyles  } from '@material-ui/core'    
import Card from './Card'
const useStyles = makeStyles(() => ({
  box:{
    marginTop:20
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
    <Box>
      <Card/>
    </Box>
  </>
  )
}
