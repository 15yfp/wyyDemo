import React, { Component } from 'react';
import axios from 'axios';
import { Player,BigPlayButton,ControlBar } from 'video-react';


import "../../../../../node_modules/video-react/dist/video-react.css";
import './play.css'

class Play extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            obj: {},
            lll:false

           
        }
    }


   


    componentDidMount() {
        const _this = this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('http://localhost:3000/mv/url?id=' + this.props.mvId.id)
            .then(function (response) {
                console.log(response.data)
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
    render() {
        return (
            <div>

                <div className='play'>
                    
                    <Player playsInline poster={this.props.mvId.cover} src={this.state.obj.url} className='btn'>
                    <BigPlayButton position="center" className="myclass" />
                    <ControlBar autoHide={false} disableDefaultControls={false} className='myclass'></ControlBar>
                    </Player>
                    
                   
                </div>
            </div>
        )
    }
}
export default Play