import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Style.css';

class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 初始化 state
            age: props.age,
             // 使用对象的浅拷贝，将 props.user 数据拷贝到 state 中
            user: { ...props.user } 
            // user: props.user
        }

        // this.state = {
        //     ...props // 初始时将所有 props 拷贝到 state 中
        // };
    }

    componentWillMount() {

    }

    componentDidMount() {
        setTimeout(() => {
            // this.props.user.name = 'Bob';
        }, 5000);
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.user !== this.props.user) {
    //         this.setState({
    //             user: { ...this.props.user }
    //         });
    //     }
    //     if (prevProps.age !== this.props.age) {
    //         this.setState({
    //             age: this.props.age
    //         });
    //     }
    // }

    static getDerivedStateFromProps(nextProps, prevState) {
        // 比较 props 和 state，并返回新的 state
        const updatedState = {};
        for (let key in nextProps) {
            if (nextProps[key] !== prevState[key]) {
                updatedState[key] = nextProps[key];
            }
        }

        return Object.keys(updatedState).length > 0 ? updatedState : null;
        // return null; // 不需要更新 state
        //全部更新
        // return { ...nextProps };
    }

    callBack = (e) => {
        console.log('this is a function');
        if (this.props.callBack) {
            this.props.callBack('jack');
        }
    };

    render() {
        return (
            <div className='center'>
                <div className='bg-green'>
                    this is child component: age: {this.state.user.age};
                    <br />
                    this is child component: user-name: {this.state.user.name};
                </div>
                <br />
                <div className='bg-yellow' onClick={this.callBack}>
                    name call callBack
                </div>
            </div>
        );
    }
}

Child.propTypes = {
    num: PropTypes.number,
    user: PropTypes.object,
    callBack: PropTypes.func
};

export default Child;