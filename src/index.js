import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import { theme  } from 'styles/global'
import {  Provider } from 'react-redux'
import  { store } from 'statusManagement/reducer/store'
import './index.css'
import App from './App'
ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>  
      <Provider store={store}>      
        <App />
      </Provider>
    </ThemeProvider>  
  </Router>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
