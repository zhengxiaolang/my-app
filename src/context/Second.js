import React, { Component } from 'react';

class Second extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 初始化 state
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // 用于根据新的 props 更新 state
    return null;
  }

  componentDidMount() {
    // 组件挂载后调用
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 控制组件是否需要重新渲染
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 在更新之前获取快照
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // 组件更新后调用
  }

  componentWillUnmount() {
    // 组件卸载之前调用
  }

  render() {
    return (
      <div>
        {/* 组件内容 */}
      </div>
    );
  }
}

Second.propTypes = {
  // 定义 prop 类型
};

export default Second;