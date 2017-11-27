import React, {Component, PropTypes} from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import {connect} from 'react-redux';
import {changeDateRange} from '../../AC/index';

import 'react-day-picker/lib/style.css';

class DateRange extends Component {
  static propTypes = {};

  static defaultProps = {
    numberOfMonths: 2
  };

  handleDayClick = (day) => {
    const {changeDateRange, range} = this.props;
    changeDateRange(DateUtils.addDayToRange(day, range));
  };

  render() {
    const { from, to } = this.props.range;
    const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;

    return (
      <div className="date-range">
        <DayPicker
          numberOfMonths={this.props.numberOfMonths}
          ref="daypicker"
          selectedDays={[from, { from, to }]}
          onDayClick={ this.handleDayClick }
        />
        {selectedRange}
      </div>
    );
  };
}

export default connect(state =>({
  range: state.filters.dateRange
}),{ changeDateRange })(DateRange);