import React, { Component } from 'react';
import { Route,Switch,withRouter }  from 'react-router-dom'
import './App.css';
import MainContaier from './components/MainContaier/index.js'



import { Search } from './components/pages/index'

class App extends Component {
  constructor(props){
    super(props)
  }
  renderRoutes(){
    let { routes } = this.props
    return routes.map(item => 
      <Route 
        key = { item.id }
        path = { item.path }
        component = { item.component }
        exact = { item.exact }
      />
    )
  }
  render() {
    return (
      <div className="App">
          {/* <Switch>
              { this.renderRoutes() }
          </Switch> */}
          
          <MainContaier></MainContaier>
      </div>   
    );
  }
}
App.defaultProps = {
  // routes: [
  //   {id: 1,path:'/',component: MainContaier,exact: true},
  //   {id: 2,path: '/search',component: Search}
    
  // ]
}
export default withRouter(App);
