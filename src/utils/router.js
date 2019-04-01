import React, { Component } from 'react';
import { BrowserRouter as Router , Route,Switch}  from 'react-router-dom'
import MainContaier from '../components/MainContaier/index'
import { 
  Search,
  Member, 
  Login, 
  Register, 
  PlayMusic, 
  ThisSong, 
  RecPlayed,
  DownManage,
  MyFm,
  Searchlist,
  Singer
} from '../components/pages/index'

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
    {id: 5,path: '/register',component: Register},
    {id: 6,path: '/playMusic/:id',component: PlayMusic},
    {id: 7,path: '/songlist',component: Searchlist,query: true},
    {id: 8,path: '/singer',component: Singer},
    {id: 50,path: '/thissong',component:ThisSong},
    {id: 51,path: '/recplayed',component:RecPlayed},
    {id: 52,path: '/downmanage',component:DownManage},
    {id: 53,path: '/myfm',component:MyFm},
  ]
}
export default MyappRouter ;
