import React, { Component } from 'react';
import MyappRouter from './utils/router'
import PlayMusicMain from'./components/common/MusicPlay/MusicPlay'
import './App.css';
class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
  }
  render() {
    return (
     <div className="App">
          <PlayMusicMain/>
         <MyappRouter/>
     </div>
      
    );
  }
}
export default App;
