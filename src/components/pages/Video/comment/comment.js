import React, { Component } from 'react';
import './comment.scss'
class Comment extends Component{
    constructor(props){
        super(props)
        console.log('sss')
        
    }
    render(){
        return(
            <div className='sendBox'>
                <textarea className='txtIpt' name="" id="" placeholder='写评论...' rows="2"></textarea>
                <span className='txtSend'>发送</span>
            </div>
        )
    }
} 
// componentDidMount(){

// }

export default Comment