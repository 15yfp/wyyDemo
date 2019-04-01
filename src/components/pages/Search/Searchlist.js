import React, { Component } from 'react'
import './index.scss'
export default class Searchlist extends Component {
  constructor(props){
    super(props)
    this.myref = React.createRef();
    this.state ={
     
    }
  }
  componentWillMount(){
   
  }
  serachHandler(e){
      
  }
  render() {
    let { go } = this.props.history
    return (
      <div>
          <div className="m-top search-top">
            <i className="iconfont icon-fanhui" onClick={() => go(-1)}></i>
            <span>
              <input type="text" onInput={this.serachHandler.bind(this)} defaultValue = {this.props.location.query.word} ref={this.myref}/>
              <i onClick={()=>{this.myref.current.value = ''}}>×</i>
            </span>
          </div>
      </div>
    )
  }
}
