import React from "react"
import Banner from "./find_banner"
import axios from "axios"
class BannerRoot extends React.Component {
    constructor() {
        super()
        this.state = {
            todo:[]
        }
        let url = "http://localhost:3000/banner"
        axios.get(url)
                .then(res=>{
                    for(let i=0;i<res.data.banners.length;i++){
                        this.state.todo.push(res.data.banners[i])
                    }  
                })
    }
    render() {
        let {todo} = this.state
        return (
            <div>
                <Banner todo={todo}/>
            </div>
        )
    }
}
export default BannerRoot