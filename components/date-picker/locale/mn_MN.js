import CalendarLocale from '../../vc-calendar/src/locale/mn_MN';
import TimePickerLocale from '../../time-picker/locale/mn_MN';

// Merge into a locale object
const locale = {
  lang: {
    placeholder: 'Огноо сонгох',
    rangePlaceholder: ['Эхлэх огноо', 'Дуусах огноо'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};


export default locale;
