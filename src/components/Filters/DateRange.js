import React, {Component, PropTypes} from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';

class DateRange extends Component {
  static propTypes = {};

  static defaultProps = {
    numberOfMonths: 2
  };

  state = {
    from: null,
    to: null
  };

  handleDayClick = (day) => {
    this.setState(DateUtils.addDayToRange(day, this.state));
  };

  render() {
    const { from, to } = this.state;
    const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;

    //selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }

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

export default DateRange;