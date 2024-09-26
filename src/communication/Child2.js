import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 初始化 state
        }
    }

    componentWillMount() {
        console.log('first', 1);
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

    render() {
        return (
            <div>

            </div>
        );
    }
}

Child.propTypes = {
    num: PropTypes.number
};

export default Child;