import React, {Component, PropTypes} from 'react';
import Select from 'react-select';
import {connect} from 'react-redux';
import {changeSelection} from '../../AC/index';

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  };

  handleChange = selected => this.props.changeSelection(selected.map(option => option.value));

  render() {
    const {articles, selected} = this.props;
    const options = articles.map(article => {
      return {
        value: article.id,
        label: article.title
      };
    });

    return (
      <Select
        name="test-select"
        options={options}
        value={selected}
        onChange={this.handleChange}
        multi={true}
      />
    );
  }
}

export default connect(state => ({
  selected: state.filters.selected,
  articles: state.articles.valueSeq().toArray()
}), { changeSelection })(SelectFilter);