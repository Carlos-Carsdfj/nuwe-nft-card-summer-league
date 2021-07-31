import { Button, Paper  } from '@material-ui/core'    

export default function Normal({ toggle }) {

  return (
    <Paper>
      <Button variant='contained' color='primary' onClick={toggle}  >
        VER NUWE NFT  
      </Button>
    </Paper>
  )
}
