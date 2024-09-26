import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Child from './Child';
import Child2 from './Child2';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 初始化 state
            num: 0,
            user: {
                name: 'Alice',
                age: 18
            }
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    callBack = (name) => {
        console.log('this is a function');
        this.setState({
            user: {
                name: name,
                age: 20
            }
        });
    }

    render() {
        return (
            <div className='center'>
                <h1>父子组件间通信</h1>
                this is parent component: {this.state.age};
                <br/>
                <h2>Brother One</h2>
                <Child age = {5} user='brown'/>
                <br/>
                <h2>Brother Two</h2>
                <Child age= {this.state.user.age} user= {this.state.user} callBack= {this.callBack}/>
                <br/>
                {/* <Child2 />   */}
            </div>
        );
    }
}

Parent.propTypes = {

};

export default Parent;


