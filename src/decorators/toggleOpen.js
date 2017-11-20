import React, {Component} from 'react';

export default (CustomComponent) => class toggleDecorator extends Component {
  state = {
    isOpen: false
  };

  toggleOpen = (e) => {
    e.preventDefault();

    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return <CustomComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen}/>
  };
}