import React, { Component } from 'react';
import { withRouter }  from 'react-router-dom'
import MyappRouter from './utils/router'
import PlayMusicBottom from'./components/common/MusicPlay/MusicPlay'
import './App.css';
class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
    this.state = {
      palybottomFlag: true
    }
  }
  render() {
    let { palybottomFlag } = this.state
    return (
     <div className="App">
            <MyappRouter/> 
            { !palybottomFlag || <PlayMusicBottom/> }
     </div>
      
    );
  }
  componentWillReceiveProps(props){
      let { pathname } = props.location
      let arr = ['/member','/login','/register']
      if(arr.indexOf(pathname) > -1 ){
        this.setState({
          palybottomFlag: false
        })
      }else{
        this.setState({
          palybottomFlag: true
        })
      }
  }
}
export default withRouter(App);
