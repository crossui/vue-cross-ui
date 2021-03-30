import CalendarLocale from '../../vc-calendar/src/locale/ms_MY';
import TimePickerLocale from '../../time-picker/locale/ms_MY';

// Merge into a locale object
const locale = {
  lang: {
    placeholder: 'Pilih tarikh',
    rangePlaceholder: ['Tarikh mula', 'Tarikh akhir'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};


export default locale;
