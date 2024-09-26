import React, { Component } from 'react';

// 兄弟组件1
class BrotherOne extends Component {
    handleClick = () => {
        // 调用父组件传递的回调函数，更新共享状态
        this.props.onUpdate('Hello from Brother One');
    };

    render() {
        return (
            <div>
                <h2>Brother One</h2>
                <button onClick={this.handleClick}>Update Message</button>
            </div>
        );
    }
}

// 兄弟组件2
class BrotherTwo extends Component {
    render() {
        return (
            <div>
                <h2>Brother Two</h2>
                <p>Message from Brother One: {this.props.message}</p>
            </div>
        );
    }
}

// 父组件
class SameParentComponent extends Component {
    state = {
        message: ''
    };

    // 更新状态的方法
    updateMessage = (newMessage) => {
        this.setState({ message: newMessage });
    };

    render() {
        return (
            <div>
                <h1>同一个父组件，兄弟组件间通信</h1>
                <BrotherOne onUpdate={this.updateMessage} />
                <BrotherTwo message={this.state.message} />
            </div>
        );
    }
}

export default SameParentComponent;
