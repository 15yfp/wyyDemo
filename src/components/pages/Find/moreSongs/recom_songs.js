import React from "react"
import { Tabs, WhiteSpace } from 'antd-mobile';
import SongSheet from "./songSheet"
import "./reset.css"
import "./songSheet.css"
class Demo extends React.Component {
  renderContent = tab =>
    (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
      <div className="p_root"><SongSheet/></div>
    </div>);

  render() {
    const tabs = [
      { title: '推荐' },
      { title: '精品' },
      { title: '欧美' },
      { title: '轻音乐' },
      { title: '摇滚' },
      { title: '民谣' },
      { title: '电子' }
    ];

    return (
      <div>
        <WhiteSpace />
        <Tabs style={{color:"#f6303f"}} tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
          {this.renderContent}
        </Tabs>
        <WhiteSpace />
      </div>
    );
  }
}
export default Demo