import { useState  } from 'react'
import {
  Card,
  CardContent,
  makeStyles,
  Typography,
  Box,
  Divider
} from '@material-ui/core'
import { useSelector } from 'react-redux'
import WorkEditor from './WorkEditor'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position:'relative',
    margin:theme.spacing(1),
    justifyContent: 'center',
    alignItems: 'center'
  },    
  card_content: {
    textAlign: 'center',
    width:'100%'
  },
  tooltip:{
    position: 'absolute',
    top: theme.spacing(-2),
    right: theme.spacing(-2),
    '&:hover':{
      cursor:'pointer',
    } 
  },

  info_content: {
    flexDirection:'row',
    gap:'30px'
  },
  divisor :{
    width:'80%',
    margin:'auto'
  }
}))

export default function WorkCard({ isUid }) {
  //const workState = useSelector(state => state.workCard)
  const personalState = useSelector(state => state.personalCard)
  const workState = useSelector(state => state.workcard)
  const classes = useStyles()

  const toggler = () =>{
    setVisible(prev => !prev)
  }

 return (
    <>
      <Card
        elevation={3} m={16}
        className={classes.root}  
      >
        <CardContent className={classes.card_content} >
          <Typography variant="h5" color="textSecondary" component="h2">
            Sobre el puesto que busca {personalState.displayName}:
          </Typography>
          <Box display="flex"
            className={classes.info_content}
            alignItems="center"
            justifyContent="center"
          >
            <Box display="flex"
              alignItems="center"
              justifyContent="center"
              flexWrap="nowrap"
            >
              <Typography variant="body2" color="textSecondary" component="p">
                barcelona españa
              </Typography>
            </Box>
            <Box display="flex"
              alignItems="center"
              justifyContent="center"
              flexWrap="nowrap"
            >
              <Typography variant="body2" color="textSecondary" component="p">
                startup
              </Typography>
            </Box>
            <Box display="flex"
              alignItems="center"
              justifyContent="center"
              flexWrap="nowrap"
            >
              <Typography variant="body2" color="textSecondary" component="p">
               money
              </Typography>
            </Box>
          </Box>
          <Divider className={classes.divisor} />
          <Box display="flex"
            className={classes.info_content}
            alignItems="center"
            justifyContent="center"
          >
            <Box display="flex"
              alignItems="center"
              justifyContent="center"
              flexWrap="nowrap"
            >
              <Typography variant="body2" color="textSecondary" component="p">
                disponibilidad par viajar
              </Typography>
            </Box>
            <Box display="flex"
              alignItems="center"
              justifyContent="center"
              flexWrap="nowrap"
            >
              <Typography variant="body2" color="textSecondary" component="p">
                dispomiilidad para trabaja en remoto
              </Typography>
            </Box>
            <Box display="flex"
              alignItems="center"
              justifyContent="center"
              flexWrap="nowrap"
            >
              <Typography variant="body2" color="textSecondary" component="p">
               incroporacion inmediata
              </Typography>
            </Box>
          </Box>  
        </CardContent> 
       {visible && <InfoEditor closedComponent={toggler} Info={workState} />}
        {
          isUid && <Tooltip title="Setting"  className={classes.tooltip}  >
            <IconButton onClick={toggler}>
              <SettingsIcon/>
            </IconButton>
          </Tooltip>
        }
        </Card>
    </>
  )
}
