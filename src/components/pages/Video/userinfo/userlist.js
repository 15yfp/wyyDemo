import React, { Component } from 'react';
import axios from 'axios';
import { Player,BigPlayButton,ControlBar } from 'video-react';
import '../icon_font_tian/iconfont.css'



import './userlist.scss'

class UserList extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            obj: {},
            // lll:false
            tt:0,

           
        }
    }

    dianzan(){
        this.setState({
           tt:1
        })
        console.log(this.state.tt)
    }
   


    componentDidMount() {
        console.log(this.props.mvId)
        const _this = this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('http://localhost:3000/mv/detail?mvid=' + this.props.mvId.id)
            .then(function (response) {
                console.log(response.data.data)
                _this.setState({
                    obj: response.data.data

                });
            })
            .catch(function (error) {
                console.log(error);
                _this.setState({
                    error: error
                })
            })
    }

    // state更新后执行 点赞
    // componentDidUpdate(){
    //     console.log(this.props.mvId)
    //     console.log(this.state.tt)
    //     const _this = this;   
    //     axios.get('http://localhost:3000/resource/like?t=1'+this.state.tt+'&type=1&id=' + this.props.mvId.id)
    //         .then(function (response) {
    //             console.log(response)
    //             _this.setState({
    //                 // obj: response.data.data
    //                 tt:0
    //             });
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //             _this.setState({
    //                 error: error
    //             })
    //         })
    // }
    

    render() {
        let {artistName,likeCount,commentCount} = this.state.obj

        return (
            <div>

                <div className='userlist'>
                <li className='userlist_left'>
                                    <span className='huatong iconfont icon-huatong'>
                                    
                                    </span>

                                    <b>{artistName}</b>
                                </li>
                                <li className='userlist_right' style={{ listStyle: 'none' }}>
                                    <span className='zan iconfont icon-zan' onClick={this.dianzan.bind(this)}><p>{likeCount}</p></span>
                                    &nbsp;&nbsp;&nbsp;
                                    <span className='comments iconfont icon-icon_comment'><p>{commentCount}</p></span>
                                    &nbsp;&nbsp;&nbsp;

                    </li>
                    
                    
                   
                </div>
            </div>
        )
    }
}
export default UserList