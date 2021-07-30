//import { makeStyles } from '@material-ui/core/styles'
import { 
  Card, 
  CardContent, 
  Avatar, 
  makeStyles, 
  Box, 
  Typography, 
  Badge, 
  withStyles,
  Divider
}  from '@material-ui/core'
import avatarImg from 'assets/images/avatarMe.svg'
import symbolImg from 'assets/images/symbol.svg' 
import Radar from '../Radar'
import { skill, soft } from 'consts'

const useStyles = makeStyles((theme)=>({
  card:{
    maxWidth:500,
    minHeight:600,
    color:theme.palette.secondary.main,
    border:`10px solid ${theme.palette.primary.main}`,
    borderRadius:10,
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
    padding:0
  },
  titles:{
    display:'flex',
    flexDirection:'column',
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


const participation=[

  {
    title:'Hackathons',
    p:12,
    id:1
  }, 
  {
    title:'Challenges',
    p:56,
    id:2
  },

  {
    title:'Proyectos OS',
    p:3,
    id:3
  },
  {
    title:'Emblemas',
    p:78,
    id:4
  }
]


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
        <Radar data={skill} name='stack'color='#569B51' />
      </CardContent>
      <CardContent className={classes.radarContent}  >
        <Radar data={soft} name='soft' color='#F29C1B' />
      </CardContent>
      <Divider variant="middle" className={classes.divisor} />
      <Divider variant="middle" className={classes.divisor} />
      <CardContent className={classes.partiContent}>
        <Box className={classes.listContent} >
          <Typography variant='body2'component='h4'  >
            participacion de @edgar.gago
          </Typography>
          {participation.map(item=>{
            return(
              <Box className={classes.textList} key={item.id} >
                <Typography variant='body2' component='p' >
                  {item.title}
                </Typography>
                <Typography variant='body2' component='p' className={classes.boldText} >
                  {item.p}
                </Typography>
              </Box>
            )
          })
          }
        </Box>
        <Box display='flex' flexDirection='column' alignItems='center' >
          <Typography variant='body2' component='h4' >
              Posición global
          </Typography>      
          <Typography variant='h2' component='p' className={classes.boldText} >
              45
          </Typography>      
        </Box>
      </CardContent>
    </Card>
  ) 
}
