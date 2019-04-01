import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import "video-react/dist/video-react.css";
import 'antd-mobile/dist/antd-mobile.css';

//引入rem
import './utils/rem'

//引入全局的公共样式
import './stylesheets/main.scss'


//引入路由
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
        <Router>
            <App />
        </Router>
, document.getElementById('root'));
serviceWorker.unregister();
