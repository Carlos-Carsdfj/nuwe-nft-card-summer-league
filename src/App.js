import {makeStyles } from '@material-ui/core'
import '@fontsource/roboto'
import Navbar from 'components/Navbar'
import Public from 'routes/public'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor:theme.palette.background.main
  }, 
  toolbar: theme.mixins.toolbar,

})
)

function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.toolbar} />
      <Navbar/> 
      <Public/>
    </div > 
  )
}

export default App

