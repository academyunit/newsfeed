import React, {Component} from 'react';

export default (CustomComponent) => class Accordion extends Component {

  static displayName = 'ComponentDecoratedWithAccordionList';

  state = {
    openArticleId: null
  };

  toggleOpen = openArticleId => ev => {
    this.setState({
      openArticleId: openArticleId
    });
  //          this.setState({openArticleId})
  };

  render() {
    return <CustomComponent
        {...this.props}
        {...this.state}
        toggleOpen={this.toggleOpen}
        openArticleId={this.state.openArticleId}/>
  };
}