import { Button, Paper  } from '@material-ui/core'    
import Radar from '../Nft/Radar'
export default function Normal({ toggle }) {

  return (
    <Paper>
      <Button variant='contained' color='primary' onClick={toggle}  >
        VER NUWE NFT  
      </Button>
      <Radar/>
    </Paper>
  )
}
