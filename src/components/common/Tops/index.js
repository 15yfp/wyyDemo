/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import { withRouter }  from 'react-router-dom'
import './index.scss'
 class Tops extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let { go } = this.props.history
    let { tit } = this.props
    return (
        <div className="m-top">
          <i className="iconfont icon-fanhui" onClick={() => go(-1)}></i>
          <span>{ tit }</span>
        </div>

    )
  }
}
export default withRouter(Tops)