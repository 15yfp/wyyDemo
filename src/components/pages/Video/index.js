import React, { Component } from 'react';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"

import Recommend from './recommend/recommend';
import Duanzi from './common/duanzi'
import MvContent from './mvInfo/mvInfo';
const tabs = [
    { title: <Badge >推荐</Badge> },
    { title: <Badge >段子</Badge> },
   

];



class Index extends Component {
    constructor() {
        super()
        //状态提升 子组件的状态将会提升到此处
        this.state = {

        }
    }
    
    render() {
        return (
            
            <div>
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div><Recommend history={this.props.history}></Recommend></div>
                    <div><Duanzi></Duanzi></div>
                    <div >
                    <MvContent></MvContent>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of forth tab
                    </div>
                </Tabs>
                <WhiteSpace />
            </div>
        )
    }
}
export default Index