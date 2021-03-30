import CalendarLocale from '../../vc-calendar/src/locale/nl_BE';
import TimePickerLocale from '../../time-picker/locale/nl_BE';

// Merge into a locale object
const locale = {
  lang: {
    placeholder: 'Selecteer datum',
    rangePlaceholder: ['Begin datum', 'Eind datum'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};


export default locale;
