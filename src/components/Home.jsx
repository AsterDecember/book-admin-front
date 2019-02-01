import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'antd'

export default class Home extends Component {
  render() {
    return (
      <div>
        <p>Home component</p>
        <Link to="/login"><Button type="primary">Login</Button></Link>
        
      </div>
    )
  }
}
