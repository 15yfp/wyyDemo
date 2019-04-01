import React from "react"
import { Carousel, WingBlank } from 'antd-mobile';

class Banner extends React.Component {
  state = {
    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    imgHeight: 178,
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: this.props.todo
      });
    }, 100);

    // console.log(this.props.todo)
  }
  render() {
    // let {todo} = this.props
    // console.log(this.state.data)
    let {data} =this.state
    // console.log(todo)
    return (
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        >
          {data.map(todos => (
            <a
              key={todos}
              href="javascript:;"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={todos.imageUrl}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }

}

export default Banner