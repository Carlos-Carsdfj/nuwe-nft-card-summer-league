import { Switch, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import Private  from 'routes/private'
import Login from  'pages/login'
import Profile from 'pages/profile'
import Users from 'pages/userList'

const useStyles = makeStyles((theme) => ({
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
    })
)

function App({  isLoggedIn  }) {
  const classes = useStyles()
  return (
    <main className={classes.content}>
      <Switch>
        <Private path='/users' isLoggedIn={isLoggedIn}>
          <Users/>
        </Private>
        <Private path='/profile/:uid' isLoggedIn={isLoggedIn}>
          <Profile/>
        </Private>
        <Route path='/login'>
          <Login/>
        </Route>
      </Switch>
    </main>  
    )
}

export default App
