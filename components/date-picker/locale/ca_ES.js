import CalendarLocale from '../../vc-calendar/src/locale/ca_ES';
import TimePickerLocale from '../../time-picker/locale/ca_ES';

// Merge into a locale object
const locale = {
  lang: {
    placeholder: 'Seleccionar data',
    rangePlaceholder: ['Data inicial', 'Data final'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};


export default locale;
