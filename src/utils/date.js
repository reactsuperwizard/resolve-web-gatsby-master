import moment from 'moment';

export function formatDate(value, format) {
  let dateValue;
  if (dateValue instanceof Date) {
    dateValue = value;
  } else {
    dateValue = new Date(value);
    if (isNaN(dateValue)) {
      return null;
    }
  }

  let dateFormat;

  switch (format) {
    case 'short':
    case 'shortDate':
      dateFormat = 'MMM D';
      if (dateValue.getFullYear() !== new Date().getFullYear()) {
        dateFormat = 'MMM D, GGGG';
      }
      break;
    case 'shortExact':
      dateFormat = 'MMM D, h:mm a';
      if (dateValue.getFullYear() !== new Date().getFullYear()) {
        dateFormat = 'MMM D, GGGG, h:mm a';
      }
      break;
    case 'shortExacter':
      dateFormat = 'MMMM D, h:mm a';
      if (dateValue.getFullYear() !== new Date().getFullYear()) {
        dateFormat = 'MMMM D GGGG, h:mm a';
      }
      break;
    case 'monthDayShort':
      dateFormat = 'MMM D GGGG';

      break;
    case 'monthDayShortComma':
      dateFormat = 'MMM D, YYYY';

      break;
    case 'monthDay':
      dateFormat = 'MMMM D';
      if (dateValue.getFullYear() !== new Date().getFullYear()) {
        dateFormat = 'MMMM D, GGGG';
      }
      break;
    case 'hour':
      dateFormat = 'MMM D, GGGG, h:mm a';
      break;
    case 'year':
      dateFormat = 'GGGG';
      break;
    case 'month':
      dateFormat = 'MMM GGGG';
      break;
    case 'week':
      dateFormat = 'Wo GGGG';
      break;
    case 'time':
      dateFormat = 'h:mm a';
      break;
    case 'long':
    case 'longDate':
      dateFormat = 'LL';
      break;
    case 'longExact':
      dateFormat = 'LL \\a\\t h:mm a';
      break;
    case 'isoDate':
      dateFormat = 'YYYY-MM-DD';
      break;
    default:
      dateFormat = format;
  }

  return moment(dateValue).format(dateFormat);
}
