import React, { Component } from 'react';
import { BrowserRouter as Router , Route,Switch,withRouter }  from 'react-router-dom'
import MainContaier from '../components/MainContaier/index'
import { Search,Member, Login, Register } from '../components/pages/index'

class MyappRouter extends Component {
  // eslint-disable-next-line no-useless-constructor
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
     <div className="myapp">
          <Switch>
              { this.renderRoutes() } 
          </Switch>
      </div>
      
    );
  }
}
MyappRouter.defaultProps = {
  routes: [
    {id: 1,path:'/',component: MainContaier,exact: true},
    {id: 2,path: '/search',component: Search},
    {id: 3,path: '/member',component: Member},
    {id: 4,path: '/login',component: Login},
    {id: 5,path: '/register',component: Register}
  ]
}
export default withRouter(MyappRouter);
