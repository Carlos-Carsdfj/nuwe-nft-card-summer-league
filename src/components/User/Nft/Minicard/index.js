//import { makeStyles } from '@material-ui/core/styles'
import { 
  Card, 
  Avatar, 
  makeStyles, 
  Modal, 
  Typography, 
  Badge, 
  withStyles,
}  from '@material-ui/core'
import { useSelector } from 'react-redux'
import Robohash from 'react-robohash'
import { useState } from 'react'
import { EditAvatar } from '../EditAvatar'
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
  modal:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  avatar2:{
    left:'-50px',
    bottom:'-10px',
    '&:hover':{
      cursor:'pointer'
    } 
  },
  avatar:{
    width:'100%',
    height:'100%',
    background:'transparent'
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
  imgAv:{
    height:'auto',
    width:'100%'
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
  
  const state = useSelector(state=>state)
  const  [ isVisible, setIsVisible ]= useState(false)
  const classes = useStyles()
  const toggle = ()=>{
    setIsVisible(prev =>!prev)
  }


  return(
    <Card className={classes.card} 
    >
      <Typography  variant='body2' component='h4' className={classes.title}
      > 
        { state.name }
      </Typography>
      <Typography  variant='body2' component='h4' className={classes.title}
      > 
        {state.title}|{state.rank}
      </Typography>
      <Typography  variant='h2' component='p' className={classes.numberInfo} 
      > 
        {state.global_position}
      </Typography>      
      <Badge className={classes.avatar2 }
        overlap="circular"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'  
        }}
        badgeContent={<SmallAvatar alr="symbol of user " src={symbolImg} /> }
        onClick={toggle}
      >
        <Avatar  alt='avatar of me' variant='square' className={classes.avatar} >
          <Robohash className={classes.imgAv} 
            name={state.avatar}
            type='cat'
          />
        </Avatar>
      </Badge>
      <Modal
        className={classes.modal}
        open={isVisible}
        onClose={toggle}
      >
        {EditAvatar({toggle:toggle})}
      </Modal>
    </Card>
  ) 
}
