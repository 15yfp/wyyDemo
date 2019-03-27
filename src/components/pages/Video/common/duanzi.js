
import React, { Component } from 'react';
import axios from 'axios';




class TrData extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.users)
        return (
            this.props.users.map((user, i) => {
                return (
                    <div key={i}>
                        <div style={{ height: '480px', width: '100%', }}>
                            <div style={{ height: '450px', width: '100%'}}>
                            <video src={user.video} controls="controls" style={{ width: '100%', height: '100%'}}>

                                </video>
                            </div>
                            <li style={{ height: '30px', width: '100%', display: 'flex',alignItems: 'center' }}>
                                <b style={{ width: '320px' }}>{user.text}</b>

                            </li>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '50px', width: '100%'}}>
                            <li style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={{ display: 'block', height: '30px', width: '30px',  }}>
                                    <img src={user.header} alt="" style={{ width: '100%', height: '100%','borderRadius': '50%' }} />

                                </span>
                                &nbsp;&nbsp;
                                <b style={{ lineHeight: '50px',color:'#5a7db5' }}>{user.name}</b>
                            </li>
                            <li style={{listStyle:'none'}}>
                                <span>点赞:{user.up}</span>
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <span>评论:{user.comment}</span>
                                &nbsp;
                                &nbsp;
                                &nbsp;
                            </li>
                        </div>
                    </div>

                )
            })
        )
    }
}


class Duanzi extends Component {
    constructor(props) {
        super(props)
        //状态提升 子组件的状态将会提升到此处
        this.state = {
            users: []
        }
    }


    componentDidMount() {
        const _this = this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('http://www.duans.top/freeApi/api.php?act=getJoke&page=1&count=10')
            .then(function (response) {
                console.log(response.data.result)
                _this.setState({
                    users: response.data.result
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
                <TrData users={this.state.users}></TrData>

            </div>
        );
    }
}

export default Duanzi;