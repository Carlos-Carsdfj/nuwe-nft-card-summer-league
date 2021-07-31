/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
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
  Box,
  CssBaseline,
}from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
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
    zIndex:50
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
  }, 
  colorTheme:{
    color:'blue',
  },
  appBar: {
    backgroundColor:theme.palette.background.main,
    [theme.breakpoints.up('sm')]: {
      display:'none'
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
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
  const handlerClosedDrawer =()=>{
    setMobileOpen(false)
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
        <ListItem button 
          onClick={() =>{ 
            history.push('/user/carlosCarsd'),
            handlerClosedDrawer()
          }} className={classes.colorTheme}  >
          
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

        <ListItem button 
          onClick={() =>{
            history.push('/')
            handlerClosedDrawer()
          }}>
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
    <CssBaseline />
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />

        </IconButton>
      </Toolbar>
    </AppBar>
 
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
