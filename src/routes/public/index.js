import { Switch, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import User from 'pages/profile'
import Home from 'pages/home'

const useStyles = makeStyles((theme) => ({
  content: {
    minHeight:'100vh',
    flexGrow: 1,
    [theme.breakpoints.down('sm')]:{
      marginTop:100
    }
  },
})
)

function Public() {
  const classes = useStyles()
  return (
    <main className={classes.content}>
      <Switch>
        <Route path='/user/:name'>
          <User />
        </Route>
        <Route path='/'>
          <Home/> 
        </Route>
      </Switch>
    </main>  
  )
}

export default Public
