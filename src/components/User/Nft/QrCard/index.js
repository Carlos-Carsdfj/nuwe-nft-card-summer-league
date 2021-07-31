import { 
  Card, 
  CardContent, 
  Avatar, 
  makeStyles, 
  Box, 
  Typography, 
  Badge, 
  withStyles,
  Divider,
  CardActionArea
}  from '@material-ui/core'
import Robohash from 'react-robohash'

import  QRCode from 'react-qr-code'
import { useSelector } from 'react-redux'
import { useTheme } from '@material-ui/core/styles'
import symbolImg from 'assets/images/symbol.svg' 

const useStyles = makeStyles((theme)=>({
  card:{
    maxWidth:500,
    minWidth:330,
    minHeight:600,
    color:theme.palette.secondary.main,
    border:`10px solid ${theme.palette.primary.main}`,
    borderRadius:10,
  },
  avatar:{
    width:90,
    height:90,
    backgroundColor:'transparent'
  },
  imgAv:{
    height:'auto',
    width:'100%'
  },
  card_content:{
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    gap:10,
    padding:0
  },
  titles:{
    display:'flex',
    flexDirection:'column',
  },
  qrCode:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  boldText:{
    fontWeight:900,
  },
  radarContent:{
    minHeight:100,
    height:'200px',
    padding:0
  },
  divisor:{
    backgroundColor:theme.palette.secondary.main,
  },
  partiContent:{
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',

  },
  listContent:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'stretch',
    alignItems:'flex-start',
    width:200
  },
  textList:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'stretch',
    width:'100%'
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



export default function QrCard({toggle}){
  
 
  const theme = useTheme()
  const state = useSelector(state => state)
  const classes = useStyles()
  
  const urlLocation = window.location.href
  
  return(
    <Card className={classes.card} 
      
    >
      <CardActionArea onClick={toggle} height='100%' >
        <CardContent className={classes.card_content} >
          <Badge
            overlap="circular"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'  
            }}
            badgeContent={<SmallAvatar alr="symbol of user " src={symbolImg} /> }
          >
            <Avatar  alt='avatar of me' className={classes.avatar} >
              <Robohash className={classes.imgAv}
                name={state.avatar}
                type='cat'
              />
            </Avatar>
          </Badge>
          <Box className={classes.titles} >
            <Typography variant='subtitle1' component='h1'>
              {state.name}
            </Typography>
            <Typography variant='subtitle1' component='h2' >
              {state.title}|{state.rank}
            </Typography>
            <Typography variant='subtitle2' component='h3' gutterBottom >
              Abierto a oportunidades
            </Typography>
          </Box>
        </CardContent>
        <CardContent  >
          <Box display='flex'  alignItems='center' >
            <Typography variant='h4' component='h3' className={classes.boldText} >
              {state.spain_rank}º
            </Typography>
            <Typography  component='h3' >
              España, {state.rank}
            </Typography>
          </Box>
          <Box display='flex' alignItems='center'  >
            <Typography variant='h4' component='h3'className={classes.boldText}  >
              {state.general_europe}
            </Typography>
            <Typography  component='h3'  >
              General Europe
            </Typography>
          </Box>
        </CardContent>
        <Divider variant="middle" className={classes.divisor} />
        <CardContent className={classes.qrCode}>
          <QRCode value={urlLocation} size={200}
            fgColor={theme.palette.background.darck} 
            bgColor={theme.palette.secondary.main} level='H'
          />
        </CardContent>
      </CardActionArea>
    </Card>
  ) 
}
