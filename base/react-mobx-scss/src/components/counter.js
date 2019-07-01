import React from 'react';
// import PropTypes from 'react-types';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

// const counterStore = observable({
//   count: 0,
//   increment: function() {
//     this.counter++;
//   },
//   decrement: function() {
//     this.counter--;
//   },
// });

@observer
class counter extends React.Component {
  constructor(props){
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMin = this.handleMin.bind(this);
  }
  // @observable counter = 0;
  handleAdd(){
    this.props.counterStore.increment(1);
  }
  handleMin(){
    this.props.counterStore.decrement(1);
  }
  render () {
    return (<div className="counter-wrapper">
      <div>Counter result: {this.props.counterStore.count}</div>
      <button onClick={this.handleAdd}> + </button>
      <button onClick={this.handleMin}> - </button>
    </div>);
  }
}

export default counter;
