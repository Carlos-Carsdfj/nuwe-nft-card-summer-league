//import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Avatar, makeStyles, Box, Typography, Badge, withStyles }  from '@material-ui/core'
import avatarImg from 'assets/images/avatar_me.svg'
import symbolImg from 'assets/images/symbol.svg' 
import Radar from '../Radar'

const useStyles = makeStyles((theme)=>({
  card:{
    maxWidth:400,
    minHeight:600,
    color:theme.palette.secondary.main,
    border:`10px solid ${theme.palette.primary.main}`
  },
  avatar:{
    width:90,
    height:90,
  },
  card_content:{
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    gap:10,   
  },
  titles:{
    display:'flex',
    flexDirection:'column',
  },
  boldText:{
    fontWeight:900,
  },
  radarContent:{
    height:200,
    minHeight:100
  }
})
)

const SmallAvatar = withStyles(() => ({
  root: {
    width: 30,
    height: 30,
    padding:0,
  },
}))(Avatar)

export default function CardNft(){
  
  const classes = useStyles()
  
  return(
    <Card className={classes.card} 
    >
      <CardContent className={classes.card_content} >
        <Badge
          overlap="circular"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'  
          }}
          badgeContent={<SmallAvatar alr="symbol of user " src={symbolImg} /> }
        >
          <Avatar src={avatarImg} alt='avatar of me' className={classes.avatar} />
        </Badge>
        <Box className={classes.titles} >
          <Typography variant='subtitle1' component='h1'>
            @edgar.gago
          </Typography>
          <Typography variant='subtitle1' component='h2' >
            Web dev|Creator||
          </Typography>
          <Typography variant='subtitle2' component='h3' gutterBottom >
            Abierto a oportunidades
          </Typography>
        </Box>
      </CardContent>
      <CardContent  >
        <Box display='flex'  alignItems='center' >
          <Typography variant='h4' component='h3' className={classes.boldText} >
            1º
          </Typography>
          <Typography  component='h3' >
            España, rango Creator ||
          </Typography>
        </Box>
        <Box display='flex' alignItems='center'  >
          <Typography variant='h4' component='h3'className={classes.boldText}  >
            157
          </Typography>
          <Typography  component='h3'  >
            General Europe
          </Typography>
        </Box>
      </CardContent>
      <CardContent className={classes.radarContent}  >
        <Radar />
      </CardContent>
    </Card>
  ) 
}
