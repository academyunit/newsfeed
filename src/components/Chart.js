import React, {Component, PropTypes} from 'react';

class Chart extends Component {
  static propTypes = {
    // ...
  };

  render() {
    return (
      <div ref={this.initRef}>Chart goes here!</div>
    );
  }

  initRef = ref => {
    if (!ref) { // не существует при componentDidMount()
      return;
    }

    this.container = ref;
  };
}

export default Chart;