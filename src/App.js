import {makeStyles } from '@material-ui/core'
import useAuth from 'hooks/useAuth'
import '@fontsource/roboto'
import Navbar from 'components/Navbar'
import Public from 'routes/public'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },  
})
)

function App() {
  const classes = useStyles()
  const {  checking, isLoggedIn, uid, logout } = useAuth()
  return (
    <div className={classes.root}>
      <div className={classes.toolbar} />
      {
        checking 
          ? <h2>loading... 🛠 </h2> 
          :(<>
            <Navbar uid={uid} 
              isLoggedIn={isLoggedIn} 
              logout={logout}/>
            <Public
              isLoggedIn={isLoggedIn}
            /> 
          </>)
      } </div > 
  )
}

export default App

