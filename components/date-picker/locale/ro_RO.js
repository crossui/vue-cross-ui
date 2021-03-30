import CalendarLocale from '../../vc-calendar/src/locale/ro_RO';
import TimePickerLocale from '../../time-picker/locale/ro_RO';

// Merge into a locale object
const locale = {
  lang: {
    placeholder: 'Selectează data',
    rangePlaceholder: ['Data start', 'Data sfârșit'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};


export default locale;
