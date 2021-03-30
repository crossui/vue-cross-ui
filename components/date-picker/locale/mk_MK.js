import CalendarLocale from '../../vc-calendar/src/locale/mk_MK';
import TimePickerLocale from '../../time-picker/locale/mk_MK';

// Merge into a locale object
const locale = {
  lang: {
    placeholder: 'Избери датум',
    rangePlaceholder: ['Од датум', 'До датум'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};


export default locale;
