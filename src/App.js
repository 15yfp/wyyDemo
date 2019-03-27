import React, { Component } from 'react';
import { Route,Switch,withRouter }  from 'react-router-dom'
import './App.css';
import MainContaier from './components/MainContaier/index.js'
<<<<<<< HEAD

=======
import { Search } from './components/pages/index'
>>>>>>> debbf6d07e8a227ac20d38ea2c7551a10f7a913b
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
<<<<<<< HEAD
      <div>
        
          <MainContaier/>
         
=======
      <div className="App">
          <Switch>
              { this.renderRoutes() }
          </Switch>
>>>>>>> debbf6d07e8a227ac20d38ea2c7551a10f7a913b
      </div>
      
    );
  }
}
App.defaultProps = {
  routes: [
    {id: 1,path:'/',component: MainContaier,exact: true},
    {id: 2,path: '/search',component: Search}
    
  ]
}
export default withRouter(App);
