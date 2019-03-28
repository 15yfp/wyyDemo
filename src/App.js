import React, { Component } from 'react';
import { Route,Switch,withRouter }  from 'react-router-dom'
import './App.css';
import MainContaier from './components/MainContaier/index.js'
import { Search,Member } from './components/pages/index'
class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
  }
  // renderRoutes(){
  //   let { routes } = this.props
  //   return routes.map(item => 
  //     <Route 
  //       key = { item.id }
  //       path = { item.path }
  //       component = { item.component }
  //       exact = { item.exact }
  //     />
  //   )
  // }
  render() {
    return (
     <div className="App">
          {/* <Switch>
              { this.renderRoutes() } */}
              <MainContaier/>
          {/* </Switch> */}
          <Switch>
            <Route path="/member" component={Member} />
          </Switch>
      </div>
      
    );
  }
}
// App.defaultProps = {
//   routes: [
//     {id: 1,path:'/',component: MainContaier,exact: true},
//     {id: 2,path: '/search',component: Search},
//     {id: 3,path: '/member',component: Member}
//   ]
// }
export default withRouter(App);
