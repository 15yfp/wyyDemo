import React from "react"
import SelectedBanner from "./find_selected_son"
import axios from "axios"
class Selected extends React.Component {
    constructor() {
        super()
        this.state = {
            selected: [],
            onec: []
        }
        let url = "http://localhost:3000/mv/first?limit=30"
        axios.get(url)
            .then(res => {
                this.setState({
                    selected: res.data.data.splice(1,3),
                    onec: res.data.data.splice(5,6)
                })
            })

    }
    render() {
        let { selected } = this.state
        // console.log(this.state.onec)
        return (
            <div>
                <div className="find_selected">
                    <div className="sele_top">
                        <h3>云村精选</h3>
                        <a href="javasript:;" className="right_a">
                            <i className="icon"></i>
                            <span className="right_span">获取新内容</span>
                        </a>
                    </div>
                </div>
                <div className="vip">
                    <h3>会员专区></h3>
                    <i className="more_line"></i>
                </div>
                <div className="sele_banner">
                    <SelectedBanner selected={selected} />
                </div>
                <div className="vedio">
                    {this.state.onec.map((list,j) => (
                        <div className="vedio_div" key={j}>
                            <img src={list.cover} alt=""/>
                            <a></a>
                        </div>
                    ))}
             </div>
        </div>
        )
    }
}
export default Selected