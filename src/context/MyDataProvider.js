import React, { createContext, Component } from 'react';

// 创建一个 Context 对象
const MyContext = createContext();

// 创建一个提供 Context 的组件
class MyProvider extends Component {
    state = {
        user: {
            name: 'Alice',
            age: 30
        }
    };

    setUser = (name, age) => {
        this.setState({
            user: { name, age }
        });
    };

    render() {
        return (
            <MyContext.Provider value={{ 
                user: this.state.user,
                setUser: this.setUser
            }}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

export { MyContext, MyProvider };
