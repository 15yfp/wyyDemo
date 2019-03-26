import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd-mobile/dist/antd-mobile.css';
//引入rem
import './utils/rem'

//引入全局的公共样式
import './stylesheets/main.scss'

//引入路由
import { BrowserRouter as Router } from 'react-router-dom'

//引入redux   Previder 
// import store from './store'
// import {Provider} from 'react-redux'

ReactDOM.render(
    // <Provider store = {store}>
        <Router>
            <App />
        </Router>
    // </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
