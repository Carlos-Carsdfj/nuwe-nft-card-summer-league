//import { makeStyles } from '@material-ui/core/styles'
import { 
  Card, 
  //CardContent, 
  Avatar, 
  makeStyles, 
  //Box, 
  Typography, 
  Badge, 
  withStyles,
}  from '@material-ui/core'
import avatarImg from 'assets/images/avatarMe.svg'
import symbolImg from 'assets/images/symbol.svg' 

const useStyles = makeStyles((theme)=>({
  card:{
    maxWidth:154,
    width:154,
    height:205,
    color:theme.palette.secondary.main,
    border:`5px solid ${theme.palette.primary.main}`,
    borderRadius:10,
    position:'relative'
  },
  avatar2:{
  

    bottom:'-10px',
  },
  avatar:{
    width:'auto',
    height:191,
   
  },
  card_content:{
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'flex-end',
    gap:10,
    padding:0
  },
  title:{
    paddingLeft:10,
    zIndex:10,
  },
  boldText:{
    fontWeight:900,
  },
  radarContent:{
    minHeight:100
  },
  divisor:{
    backgroundColor:theme.palette.secondary.main,
  },
  partiContent:{
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',

  },
  numberInfo:{
    position:'absolute',
    bottom:'-15px',
    right:5,
    zIndex:10,
    fontWeight:900,
    padding:0,
    color:theme.palette.primary.main
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
    width: 60,
    height: 60,
    marginRight:'-30px',
    marginBottom:'-30px',
    padding:0,
  },
}))(Avatar)

export default function Minicard(){
  
  const classes = useStyles()
  
  return(
    <Card className={classes.card} 
    >
      <Typography  variant='body2' component='h4' className={classes.title}
      > 
        @edgar.gago
      </Typography>
      <Typography  variant='body2' component='h4' className={classes.title}
      > 
      Web dev|Creator||
      </Typography>
      <Typography  variant='h2' component='p' className={classes.numberInfo} 
      > 
      45
      </Typography>      
      <Badge className={classes.avatar2 }
        overlap="circular"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'  
        }}
        badgeContent={<SmallAvatar alr="symbol of user " src={symbolImg} /> }
      >
        <Avatar src={avatarImg} alt='avatar of me' variant='square' className={classes.avatar} >
        </Avatar>
      </Badge>
    </Card>
  ) 
}
