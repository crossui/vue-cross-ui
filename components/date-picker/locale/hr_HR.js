import CalendarLocale from '../../vc-calendar/src/locale/hr_HR';
import TimePickerLocale from '../../time-picker/locale/hr_HR';

// Merge into a locale object
const locale = {
  lang: {
    placeholder: 'Odaberite datum',
    rangePlaceholder: ['Početni datum', 'Završni datum'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};


export default locale;
