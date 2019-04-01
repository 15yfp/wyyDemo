/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import './index.scss'
import axios from 'axios'
import { Link } from "react-router-dom"
export default class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
        searchhot : [],
        searchAdvise: [],
        searchhistory: []
    }
    axios.get("http://localhost:3000/search/hot")
    .then( res=>{
        this.setState({
            searchhot : res.data.result.hots
        })
    })
  }
  serachHandler(e){
    if(e.target.value){
      axios.post(`http://localhost:3000/search/suggest?keywords=${e.target.value}&type=mobile`)
      .then(res => {
        this.setState({
            searchAdvise : res.data.result.allMatch
        })
      })
    }else{
      this.setState({
         searchAdvise : [] // 当返回到数据的时候就将返回的数据赋值给searchAdvise，否则searchAdvise为空数组，原因，只要setState，render（）就会重新渲染
      })
    }
  }

  //使用es6的数组新特性,Array.from，接受一个数组或者是类数组对象，自动去重其中的重复项，set返回一个对象
  // Array.from()的作用，可以吧伪类数组对象，可迭代对象转化为数组

  handler(item){
    let { searchhistory } = this.state
    this.setState({
        searchhistory: Array.from(new Set([...searchhistory, item])) 
    })   
    // console.log(this.state.searchhistory)   
  }
  
  renderHistory(){
    let { searchAdvise } = this.state
    if( searchAdvise.length !== 0 ){
      return (
        <dl className="app-search-model">
          <dt><Link to={{pathname : '/songlist', search: `?keyword=${searchAdvise[0].keyword}` }}>搜索"{searchAdvise[0].keyword}"</Link></dt>
          {
             searchAdvise.map((item,index) => {
                  return (
                      <dd key={index}  onClick={this.handler.bind(this,item)}>
                        <Link to={{pathname : '/songlist', search: `?keyword=${item.keyword}` }}>
                            <i className="iconfont icon-2fangdajing"></i>{item.keyword}
                        </Link>
                      </dd>
                  )
             })
          }
        </dl>
      )
    }
  }
  render() {
    let { go } = this.props.history
    let { searchhot, searchhistory} = this.state
    return (
      <div>
          <div className="m-top search-top">
              <i className="iconfont icon-fanhui" onClick={() => go(-1)}></i>
              <span>
                  <input placeholder="绿色 最近很火哦"   type="text" onInput={this.serachHandler.bind(this)} />
              </span>
          </div>
          <Link to="/singer">
              <div className="search-song">
                  <h3>按歌手搜索<i className="iconfont icon-next"></i></h3>
                  <div className="song-img">
                      <img src="http://p1.music.126.net/BMtfcbprcOxezlHpIslrAw==/109951163731856205.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"/>
                      <img src="http://p1.music.126.net/BMtfcbprcOxezlHpIslrAw==/109951163731856205.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"/>
                      <img src="http://p1.music.126.net/BMtfcbprcOxezlHpIslrAw==/109951163731856205.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp"/>
                  </div>
              </div>
          </Link>
          <div className="search-con">
                  <dl>
                      <dt>热门搜索</dt>
                      {
                        searchhot.map((item,index) => {
                          return (
                            <dd key = { index } onClick={this.handler.bind(this,item)}>
                                <Link to={{pathname : '/songlist', search: `?keyword=${item.first}`, query: {word: item.first }} }>
                                    {item.first}
                                </Link>
                            </dd>
                          )
                        })
                      }
                   </dl>
                   <dl>
                     <dt>历史记录<i className="iconfont icon-delete"></i></dt>
                     {
                        searchhistory.map((item,index) => {
                          return (
                            <dd key = { index }>
                                <Link to={{pathname : '/songlist', search: `?keyword=${item.first}` }}>
                                    {item.first}
                                </Link>
                            </dd>
                          )
                        })
                     }
                   </dl>
            </div>
            { this.renderHistory() }
      </div>
    )
  }
}
