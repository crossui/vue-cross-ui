import CalendarLocale from '../../vc-calendar/src/locale/ga_IE';
import TimePickerLocale from '../../time-picker/locale/ga_IE';

// Merge into a locale object
const locale = {
  lang: {
    placeholder: 'Select date',
    rangePlaceholder: ['Start date', 'End date'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};


export default locale;
