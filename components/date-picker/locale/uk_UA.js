import CalendarLocale from '../../vc-calendar/src/locale/uk_UA';
import TimePickerLocale from '../../time-picker/locale/uk_UA';

const locale = {
  lang: {
    placeholder: 'Оберіть дату',
    rangePlaceholder: ['Початкова дата', 'Кінцева дата'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};


export default locale;
