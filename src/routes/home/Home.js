import React from 'react'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import {Button} from 'antd'
import styles from './home.less'
import classnames from 'classnames'
const Home = (props) => {
  const {user} = props.home
  const click = () => {
    props.dispatch({
      type: 'home/update',
      payload: {
        user: 2222222
      }
    })
  }
  const fetch = () => {
    props.dispatch({
      type: 'home/fetch',
      payload: {
        dete: 2222222
      }
    }).then(res => {
      
    })
  }

  const login = () => {
    props.dispatch(routerRedux.push({
      pathname: '/login',
    }))
  }
//  const classname = 
  return (
    <div>
      {user}
      <div className={classnames(styles.home)}onClick={click}>change</div>
      <div onClick={fetch}>fetcd</div>
      <div onClick={login}>loddgin</div>
      <Button>fetch</Button>
    </div>
  )
}

const mapStateToProps = (home) => home

export default connect(mapStateToProps)(Home)