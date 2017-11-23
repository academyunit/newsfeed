import React, {Component, PropTypes} from 'react';
import Select from 'react-select';

class ArticlesSelect extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  };

  state = {
    selected: null
  };

  handleSelectChange = selected=> {
    this.setState({selected});
  };

  render() {
    const {articles} = this.props;
    const {selected} = this.state;

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
        onChange={this.handleSelectChange}
        multi={true}
      />
    );
  }
}

export default ArticlesSelect;