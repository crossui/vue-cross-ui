import CalendarLocale from '../../vc-calendar/src/locale/es_ES';
import TimePickerLocale from '../../time-picker/locale/es_ES';

// Merge into a locale object
const locale = {
  lang: {
    placeholder: 'Seleccionar fecha',
    rangePlaceholder: ['Fecha inicial', 'Fecha final'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};


export default locale;
