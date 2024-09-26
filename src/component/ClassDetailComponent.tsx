import React, { Component } from 'react';

import './Style.css';

interface DetailProps {
    name: string;
    age?: number;
    onValueChange?: (value: number) => void;
}

interface DetailState {
    count: number;
    name: string;
}

interface DetailStaticProperties {
    staticField: string;
}

class ClassDetailComponent extends Component<DetailProps, DetailState, DetailStaticProperties> {

    constructor(props) {
        super(props);
        // 初始化 state
        this.state = {
            count: props.age || 0,
            name: 'Alice',
        };
    }

    componentDidMount() {
        // 组件挂载后调用
        console.log('Component did mount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 控制组件是否需要重新渲染
        // return nextState.count !== this.state.count;
        return true;
    }

    
    static getDerivedStateFromProps(nextProps, prevState) {
        // 根据新的 props 更新 state
        if (nextProps.age !== prevState.count) {
            return { count: nextProps.age };
        }
        return null; // 不需要更新 state
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // const value = 123;
        // 如果项目数量增加，计算当前滚动位置
        // console.log('getSnapshotBeforeUpdate:', value)
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
        const { count } = this.state;
        return (
            <div className='center'>
                组件接收props:value: {this.props.age}
                <br/>
                <input
                    type="text"
                    value={count}
                    onChange={this.handleChange}
                />
                <p>Current Value: {count}</p>
            </div>
        );
    }

    handleChange = (event) => {
        const newValue = event.target.value;
        this.setState({ count: newValue });

        // 调用父组件传入的方法，进行双向数据绑定
        if (this.props.onValueChange) {
            this.props.onValueChange(newValue);
        }
    };

    handleIncrementCount = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    };

    handleChangeName = () => {
        this.setState(prevState => ({ name: prevState.name === 'Alice' ? 'Bob' : 'Alice' }));
    };

    render() {
        const { count, name } = this.state;
        return (
            <div className='bg-blue center'>
                <p>Count: {count}</p>
                <p>Name: {name}</p>
                <button onClick={this.handleIncrementCount}>Increment Count</button>
                <button onClick={this.handleChangeName}>Change Name</button>
            </div>
        )
    }
    
}

export default ClassDetailComponent;