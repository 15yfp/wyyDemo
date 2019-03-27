import React, { Component } from 'react';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';

import Recommend from './common/recommend';
import Duanzi from './common/duanzi'
const tabs = [
    { title: <Badge >推荐</Badge> },
    { title: <Badge >段子</Badge> },
    { title: <Badge >Third Tab</Badge> },
    { title: <Badge >Forth Tab</Badge> },

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
                    <div>
                        <Recommend></Recommend>
      </div>
                    <div>
                    <Duanzi></Duanzi>
      </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of third tab
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