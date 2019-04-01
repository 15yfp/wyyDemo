import React, { Component } from 'react'
import './index.scss'
import axios from 'axios'
import BScorll from 'better-scroll'
export default class Singerlist extends Component {
    constructor(props){
        super(props)
        this.state = {
            singerlist : [],
            backlist: [],
            flag: "111",
            sigclassify: [
                {id: 1001,title: "华语男"},
                {id: 1002,title: "华语女"},
                {id: 1003,title: "华语乐队/组合"},
                {id: 2001,title: "欧美男"},
                {id: 2002,title: "欧美女"},
                {id: 2003,title: "欧美乐队/组合"},
                {id: 6001,title: "日本男"},
                {id: 6002,title: "日本女"},
                {id: 6003,title: "日本乐队/组合"},
                {id: 7001,title: "韩国男"},
                {id: 7002,title: "韩国女"},
                {id: 7003,title: "韩国乐队/组合"},
                {id: 4001,title: "其它男"},
                {id: 4002,title: "其它女"},
                {id: 4003,title: "其它乐队/组合"}
            ],
        }
        this.page = 0
        this.scroll={
            tool: null
        }
        this.backlist = []
    }

    
    gethotsAsnyc(val){
        if(val){
            return this.state.sigclassify.forEach(ele => {
                if(val == ele.title){
                axios.get("http://localhost:3000/artist/list",{
                        params: {
                            cat: ele.id,
                            offset: this.page,
                            limit: 30   
                        }
                    })
                    .then( res => {
                        this.page ++
                        this.setState({
                            backlist : [...this.backlist,...res.data.artists]
                        })
                    })
                    console.log(this.backlist)
                }
            });
        }
    }
    componentWillReceiveProps(props){
        this.gethotsAsnyc(props.data)
        setTimeout(() => {
            this.setState({
                singerlist: props.data ?  this.state.backlist : props.hotsinger      
            })
            console.log(this.state.singerlist)
       }, 2);
    }

    // eslint-disable-next-line no-dupe-class-members
    // componentDidUpdate(){
    //     this.props.scroll.tool.refresh()
    // }
    componentDidMount(){
        // this.getListAsnyc()
        this.scroll.tool = new BScorll(this.el,{
            pullUpLoad: {
                threshold: 50,
                moreTxt: '加载更多...',
                noMoreTxt: "没有更多数据啦..."
            }
        })
        // this.scroll.tool.on('pullingUp', async() => {
        //     await this.gethotsAsnyc()
        //     this.scroll.finishPullUp()
        // })  
    } 


    // componentDidUpdate(props,state){
    //     if(this.state.singerlist !== state.singerlist){
    //         this.scroll.tool.refresh()
    //     }
    // }
    // componentWillReceiveProps(props){
    //     this.state.sigclassify.forEach(ele => {
    //         if(props.data == ele.title){
    //         axios.get("http://localhost:3000/artist/list",{
    //                 params: {
    //                     cat: ele.id,
    //                     offset: 0,
    //                     limit: 30   
    //                 }
    //             })
    //              .then( res => {
    //                 this.setState({
    //                     singerlist : res.data.artists,
    //                 })
    //              })
    //         }
    //     });
    // }
   render() {
        let { singerlist } = this.state
        return (
            <div className="singerListWarp" ref = { el => this.el = el }>
               <ul className="singer-con">
                    {
                        singerlist.map((item,index) => {
                          return (
                            <li key = { index}>
                                <div className="singer-info">
                                    <img src={ item.img1v1Url }/>
                                    <span>{ item.name }</span>
                                    <i className="iconfont icon-ziyuanxhdpi" style={{display: (item.albumSize <= 40) ? "inline" : "none"}}></i>
                                </div>
                                <a className="collect">
                                    <i>+</i>
                                    收藏
                                </a>
                            </li>
                          )
                        })
                    }
                </ul>
            </div>
        )
    }
}
