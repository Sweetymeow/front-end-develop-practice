import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Counter extends Component {
    render() {
        return (
            <div>
                <p>Clicked: {this.props.count} times</p>
                <button onClick={() => { this.props.increment() }}>
                    +
                </button>
                <button onClick={() => { this.props.decrement() }}>
                    -
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

// 组件层级中的 connect() 方法都能够获得 Redux store
export default connect(mapStateToProps,
  { increment, decrement })(Counter);
