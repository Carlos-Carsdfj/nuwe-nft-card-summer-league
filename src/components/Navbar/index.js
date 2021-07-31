/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { 
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Divider,
  makeStyles,
  Drawer,
  Hidden,
  useTheme,
  Typography,
  Box
}from '@material-ui/core'
import logoNuwe from 'assets/images/icons/Nuwe_Mono.svg'
import lettersNuwe from 'assets/images/icons/Nuwe_Letters.png'
import PanelIcon from 'assets/images/icons/Home.svg'
import ProfileIcon  from 'assets/images/icons/Profile.svg'
const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
  
  toolbar: theme.mixins.toolbar,
  textAlign:'center',
  drawerPaper: {
    width: drawerWidth,
  },
  imgLetters:{
    height:'auto',
    width:80
  },
  imgLogo:{
    maxWidth:'100px',
    height:'auto',
    width:50 ,
    display:'block',
  },
  imagesContent:{
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    padding:10,
    gap:5
  }, 
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      zIndex:50
    },
   
    colorTheme:{
      color:'blue',
    },
  },
}))


export default function Navbar({window}) {

  const container = window !== undefined ? () => window().document.body : undefined
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const classes = useStyles()
  const history = useHistory()
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const drawer = (
    <div>
      <div className={classes.toolbar} >
        <Box className={classes.imagesContent}  >
          <img src={logoNuwe}  className={classes.imgLogo} alt='Nuwe Logo' />
          <img src={lettersNuwe}  className={classes.imgLetters} alt='Nuwe Logo' />
        </Box>
      </div>
      <Divider />

      <List>
        <ListItem button onClick={() => history.push('/user/carlosCarsd')} className={classes.colorTheme}  >
          <ListItemIcon>
            <img src={ProfileIcon} alt='Profiles icon' />
          </ListItemIcon>
          <ListItemText 
            disableTypography
            primary={<Typography type="body2" style={{ color:theme.palette.secondary.main}}>
              Perfil
            </Typography>}
          />
        </ListItem>

        <ListItem button onClick={() => history.push('/')}>
          <ListItemIcon>
            <img src={PanelIcon} alt='Panel icon' />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={<Typography type="body2" style={{ color:theme.palette.secondary.main}}>
              Panel
            </Typography>}
          />
        </ListItem>
      </List>
    </div>
  )

 
  return (<>

    <nav className={classes.drawer} aria-label="mailbox folders">
      
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  </>)           

}
