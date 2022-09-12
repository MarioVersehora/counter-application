import React, { Component } from 'react';

class Counter extends Component {

  state = {
    count: 1
  }

  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <button onclick={this.increment()}>Increment</button>
        <button onclick={this.decrement()}>Decrement</button>
      </div >
    );
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.state.count--;
  }


}

export default Counter;