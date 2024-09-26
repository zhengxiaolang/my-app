import React, { Component } from 'react';
import { MyContext, MyProvider } from './MyDataProvider';

// 创建一个消费 Context 的组件
class ChildComponent extends Component {
    static contextType = MyContext;

    handleChangeUser = () => {
        const { setUser } = this.context;
        setUser('Bob', 25);
    };

    render() {
        const { user } = this.context;
        return (
            <div>
                <p>User Name: {user.name}</p>
                <p>User Age: {user.age}</p>
                <button onClick={this.handleChangeUser}>Change User</button>
            </div>
        );
    }
}

// 创建一个消费 Context 的组件
class Child2Component extends Component {
    static contextType = MyContext;

    handleChangeUser = () => {
        const { setUser } = this.context;
        setUser('Bob--22', 250);
    };

    render() {
        const { user } = this.context;
        return (
            <div>
                <p>User Name: {user.name}</p>
                <p>User Age: {user.age}</p>
                <button onClick={this.handleChangeUser}>Change User</button>
            </div>
        );
    }
}

// 创建一个顶层父组件
class ParentContextComponent extends Component {
    render() {
        return (
            <MyProvider>
                <div className='center'>
                    <h1>上下文Context Component</h1>
                    <ChildComponent />
                    <br/>
                    <Child2Component />
                </div>
            </MyProvider>
        );
    }
}

export default ParentContextComponent;
