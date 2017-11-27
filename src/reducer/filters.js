import {CHANGE_SELECTION, CHANGE_DATE_RANGE} from '../constants';

const defaultFilters = {
  selected: [],
  dateRange: {
    from: null,
    to: null
  }
};

export default (filters = defaultFilters, action) => {
  const {type, payload} = action;

  switch(type) {
    case CHANGE_SELECTION:
      //return Object.assign({}, filters, { dateRange: payload.dateRange });
      return {...filters, selected: payload.selected};

    case CHANGE_DATE_RANGE:
      return {...filters, dateRange: payload.dateRange};
  }

  return filters;
}