//这是一个mv视频评论页面

import React, { Component } from 'react';
import { Tag, Flex } from 'antd-mobile';
import './mvInfo.scss'
import axios from 'axios';
import Play from '../recommend/play';

import moment from 'moment';
import Comment from '../comment/comment';



function onChange(selected) {
    console.log(`tag selected: ${selected}`);
}
class MvContent extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)

        this.state = {
            obj: {},
            arr: [],
            commentarr: []
        }
    }

    goback(props){
        this.props.history.go(-1)
    }

    componentDidMount() {
        const _this = this;
        axios.get('http://localhost:3000/mv/detail?mvid=' + this.props.match.params.id)
            .then(function (response) {
                // console.log(response.data.data)
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
        // 相似视频
        axios.get('http://localhost:3000/simi/mv?mvid=' + this.props.match.params.id)
            .then(function (response) {
                // console.log(response.data.mvs)
                _this.setState({
                    arr: response.data.mvs

                });
            })
            .catch(function (error) {
                console.log(error);
                _this.setState({
                    error: error
                })
            })

        // 评论
        axios.get('http://localhost:3000/comment/mv?id=' + this.props.match.params.id)
            .then(function (response) {
                console.log(response.data.comments)
                _this.setState({
                    commentarr: response.data.comments
                });
            })
            .catch(function (error) {
                console.log(error);
                _this.setState({
                    error: error
                })
            })
    }




    render() {
        
        let { id, subCount, commentCount, briefDesc, playCount, artistName, shareCount, likeCount } = this.state.obj
        return (

            <div className='box_all'>
                 <div className='back'>
                <span className='goback iconfont icon-fanhui' onClick={this.goback.bind(this)}>
                    <b>相关视频</b>
                </span>
                
                </div>
                <div className='mvInfo'>
                    <div className='mv_content'>
                        <div className='mv_play'>
                            <Play mvId={this.props.match.params}></Play>

                        </div>
                        <div className='mv_msg'>
                            <div className='mv_title'>
                                <span>{briefDesc}</span>
                                {/* <span>图标</span> */}
                            </div>
                            {/* 标签 */}
                            <div className="tag-container">
                                <span>{playCount}次观看</span>
                                <Tag data-seed="logId">这个标签</Tag>
                                <Tag data-seed="logId">那个标签</Tag>
                                <Tag data-seed="logId">多个标签</Tag>
                                <Tag data-seed="logId">哪个标签</Tag>
                                <Tag data-seed="logId">他个标签</Tag>
                                <Tag data-seed="logId">有个标签</Tag>
                            </div>
                            <div className='share'>
                                <li>点赞:{likeCount}</li>
                                <li>收藏:{subCount}</li>
                                <li>评论:{commentCount}</li>
                                <li>分享:{shareCount}</li>
                            </div>
                            <div className='mv_user'>
                                <li >
                                    <span >


                                    </span>
                                    &nbsp;&nbsp;
                                <b>{artistName}</b>
                                </li>
                                <a href="">+关注</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* //下面的内容 */}
                <div className='xg_box'>
                    <h2>相关视频</h2>
                    {this.state.arr.map((item, i) => {
                        
                        return (
                            
                            <div key={i} className='xg'>

                                <span><img src={item.cover} alt="" /></span><p>{item.name}</p>


                            </div>

                        )
                    })}

                </div>

                {/* 评论页面 */}
                <div>
                <span className='com_title'><h2>精彩评论</h2></span>
                    {this.state.commentarr.map((data, i) => {
                        
                        return (
                            
                            <div key={i} className='comment'>
                            
                                <li className='commentuser'>
                                    <div className='usermain'>
                                    <span className='username'>
                                    {/* <b>{data.content}</b> */}
                                        <img src={data.user.avatarUrl} alt=""/>
                                    </span>
                                    <p>
                                    <b>{data.user.nickname}</b><br/>
                                    <b>{moment(data.time).format("YYYY-MM-DD")}</b>
                                    </p>
                                    </div>
                                    <span className='zan'><img src={require("../../../../assets/images/zan.png")} alt=""/><p>{data.likedCount}</p></span>
                                </li>
                                <li>
                                    <p>{data.content}</p>
                                </li>
                            </div>
                        )
                    })}

                </div>
                <Comment></Comment>
            </div>

        )
    }
}
export default MvContent