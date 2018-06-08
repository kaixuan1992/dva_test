/* global window */
import React from 'react'
import { connect } from 'dva'
import { withRouter } from 'dva/router'
import './IndexPage.css'



const App = ({ children}) => {
  return (
    <div>
      {children}
    </div>
  )
}


export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App))
