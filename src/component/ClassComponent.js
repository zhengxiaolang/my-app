import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Style.css';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        // 初始化 state
        // props.age = props.age + 10;
        this.state = {
            age: props.age || 0,
            name: 'Alice',
        };
    }

    componentDidMount() {
        // 组件挂载后调用
        console.log('Component did mount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 控制组件是否需要重新渲染
        // return nextState.age !== this.state.age;
        return true;
    }

    
    static getDerivedStateFromProps(nextProps, prevState) {
        // 根据新的 props 更新 state
        if (nextProps.age !== prevState.age) {
            // return { age: nextProps.age };
        }
        return null; // 不需要更新 state
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        const value = 123;
        // 如果项目数量增加，计算当前滚动位置
        console.log('getSnapshotBeforeUpdate:', value)
        // return value
        // 否则返回 null
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // 组件更新后调用
        console.log('snapshot', snapshot);
        console.log('Component did update');
    }

    componentWillUnmount() {
        // 组件卸载之前调用
        console.log('Component will unmount');
    }

    render2() {
        const { age } = this.state;
        return (
            <div className='center'>
                组件接收props:value: {this.props.age}
                <br/>
                <input
                    type="text"
                    value={age}
                    onChange={this.handleChange}
                />
                <p>Current Value: {age}</p>
            </div>
        );
    }

    handleChange = (event) => {
        const newValue = event.target.value;
        this.setState({ age: newValue });

        // 调用父组件传入的方法，进行双向数据绑定
        if (this.props.onValueChange) {
            this.props.onValueChange(newValue);
        }
    };

    handleIncrementage = () => {
        this.setState(prevState => ({ age: prevState.age + 1 }));
    };

    handleChangeName = () => {
        this.setState(prevState => ({ name: prevState.name === 'Alice' ? 'Bob' : 'Alice' }));
    };

    render() {
        const { age, name } = this.state;
        return (
            <div className='bg-blue center'>
                <p>age: {age}</p>
                <p>Name: {name}</p>
                <button onClick={this.handleIncrementage}>Increment age</button>
                <button onClick={this.handleChangeName}>Change Name</button>
            </div>
        )
    }
    
}

ClassComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    onValueChange: PropTypes.func,
};

export default ClassComponent;