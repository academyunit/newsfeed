import React, {Component} from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import ArticlesSelect from './ArticlesSelect';
import DateRange from './DateRange';
import 'react-day-picker/lib/style.css';

class Filters extends Component {

  render() {
    return (
      <div>
        <ArticlesSelect articles={this.props.articles}/>
        <DateRange/>
      </div>
    );
  };
}

export default Filters;