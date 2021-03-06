import CalendarLocale from '../../vc-calendar/src/locale/he_IL';
import TimePickerLocale from '../../time-picker/locale/he_IL';

// Merge into a locale object
const locale = {
  lang: {
    placeholder: 'בחר תאריך',
    rangePlaceholder: ['תאריך התחלה', 'תאריך סיום'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};


export default locale;
