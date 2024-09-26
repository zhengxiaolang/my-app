import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PubSub from 'pubsub-js';


class PubsubCom extends Component {
    render() {
        return (
            <div className='center'>
              
                <h1>无同一个父组件，兄弟组件间通信</h1>
                <h1>PubsubJS Component</h1>
                <Publisher/>
                <Subscriber/>
            </div>
        );
    }
}

PubsubCom.propTypes = {

};

export default PubsubCom;

class Publisher extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        num: 0
      };
    }
    componentDidMount() {  
      // 假设我们在组件挂载后发布一个事件
      setInterval(() => {
        PubSub.publish('someChannel', { message: 'Hello from Publisher!'+ this.state.num }); 
        this.setState({
          num: this.state.num + 1
        });
  
      }, 1000);
    } 
    
    render() {  
      return <div>Publisher Component</div>;  
    }  
  }  
    
  class Subscriber extends React.Component {  
    componentDidMount() {  
      // 订阅事件  
      this.token = PubSub.subscribe('someChannel', (msg, data) => {  
        console.log(data.message, msg); // 输出: Hello from Publisher!  
      });  
    }  
    
    componentWillUnmount() {  
      // 组件卸载时取消订阅，防止内存泄漏  
      PubSub.unsubscribe(this.token);
    }  
    
    render() {  
      return <div>Subscriber Component</div>;  
    }  
  }  
