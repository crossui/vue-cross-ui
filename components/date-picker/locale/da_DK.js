import CalendarLocale from '../../vc-calendar/src/locale/da_DK';
import TimePickerLocale from '../../time-picker/locale/da_DK';

// Merge into a locale object
const locale = {
  lang: {
    placeholder: 'Vælg dato',
    rangePlaceholder: ['Startdato', 'Slutdato'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};


export default locale;
