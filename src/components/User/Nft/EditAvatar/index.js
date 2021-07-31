import { Button, Paper, Avatar, makeStyles, Box  } from '@material-ui/core'
import { useState } from 'react'
import Robohash from 'react-robohash'
import { useSelector, useDispatch  } from 'react-redux'
import {changeAvatar } from 'statusManagement/reducer/action'
import CasinoOutlinedIcon from '@material-ui/icons/CasinoOutlined'
const useStyles = makeStyles(()=>({
  root:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap',
    gap:10,
    width:'100%',
    maxWidth:350,
    padding: ' 10px 0'
  },
  avatar:{
    height:'auto',
    width:'90%',
    maxWidth:300
  },
  imgAv:{
    width:'100%',
    height:'auto'
  }
}))

export const EditAvatar = ({toggle})=>{
  const dispatch = useDispatch()
  const state = useSelector(state=>state)
  const [ avatar, setAvatar ] = useState(state.avatar)
  const classes = useStyles()  
  const handler = () =>{
    dispatch(changeAvatar(avatar))
    toggle()
  }
  
  const change = ()=>{
    let tempAvatar = Math.random()*2000
    setAvatar(tempAvatar)
     
  }
  return(
    <Paper elevation={3} className={classes.root} >
      <Avatar  alt='avatar of me' variant='square' className={classes.avatar} >
        <Robohash className={classes.imgAv} 
          name={avatar}
          type='cat'
        />
      </Avatar>
      <Box display='flex' justifyContent='center' >
        <Button onClick={toggle} variant='outlined' color='primary' >salir</Button>
        <Button onClick={handler} variant='contained' color='primary' >guardar</Button>
        <Button onClick={change} variant='contained' ><CasinoOutlinedIcon/></Button>
      </Box>
    </Paper>
  ) 


}
