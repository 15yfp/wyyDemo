/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import Tops from '../../common/Tops'
import './index.scss'
import Singerlist from './singerList'
import axios from 'axios'

export default class Singer extends Component {
  constructor(props){
      super(props)
      this.state = {
          language: ["华语","欧美","日本","其它"],
          type : ["男","女","乐队/组合"],
          tt: "",
          aa: "",
          showFlag: false,
          isActive: null,
          istype: null,
          hotSongler: [],
          // flag: true
      }
      this.page = 0
    }  
    componentDidMount(){
      // console.log(this.el.scroll)
      this.getListAsnyc()
      this.el.scroll.tool.on('pullingUp', async() => {
        await this.getListAsnyc()
        this.el.scroll.tool.finishPullUp()
      })   
    }
   
    getListAsnyc(){
      return  axios.get("http://localhost:3000/top/artists",{
              params: {
                      offset: this.page,
                      limit: 30    
                  }
              })
              .then( res => {
              this.page++
              //  console.log(res.data.artists)
                  this.setState({
                  hotSongler :[...this.state.hotSongler,...res.data.artists],
                  })

              })
   }


  handler(item,index){
    this.setState({
        tt: item,
        isActive: index,
        // flag: false
    })
  }
  typahandler(item,index){
    this.setState({
        aa: item,
        istype: index
    })
  }
  render() {
    let {  language, type, showFlag, isActive, istype} = this.state
    let info = `${this.state.tt}${this.state.aa}`
    // console.log(info)
    return (
      <div className="singerWarp" >
          <Tops tit="歌手分类"/>
          <div className="singer-tit" style= {{  display: (showFlag) ? "none" : "flex" }}>
              <span>全部歌手</span>
              <span onClick={()=>{this.setState({showFlag : true})}}><i className="iconfont icon-chanpinliebiaoshaixuan"></i>筛选</span>
          </div>
          <div className="filtrate" style= {{  display: (showFlag) ? "block" : "none" }}>
                <p>
                {
                    language.map((item,index) => {
                        return (
                            <span key={ index } onClick={this.handler.bind(this,item,index)} className={ isActive == index ? "active" : ""}>{ item }</span>
                        )
                    })
                }
                </p>
                <p>
                {
                    type.map((item,index) => {
                        return (
                            <span key={ index } onClick={this.typahandler.bind(this,item,index)}  className={ istype == index ? "active" : ""}>{ item }</span>
                        )
                    })
                }
                </p>
          </div>
          <h3 className="singer-tip">{ info ? info : "热门歌手" }</h3>
          <Singerlist data={info} ref={el=>{this.el=el}} hotsinger={this.state.hotSongler}/>
      </div>
    )
  }
}
