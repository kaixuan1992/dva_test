import React from 'react'
import { connect } from 'dva'
// import {Button} from 'antd'

const Login = (props) => {
  console.log(props, 'dddddprops')
  // const {user} = props.home
  // const click = () => {
  //   props.dispatch({
  //     type: 'home/update',
  //     payload: {
  //       user: 2222222
  //     }
  //   })
  // }
  // const fetch = () => {
  //   props.dispatch({
  //     type: 'home/fetch',
  //     payload: {
  //       dete: 2222222
  //     }
  //   })
  // }
  return (
    <div>
      login
    </div>
  )
}

const mapStateToProps = (home) => home

export default connect(mapStateToProps)(Login)