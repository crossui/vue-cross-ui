import CalendarLocale from '../../vc-calendar/src/locale/ko_KR';
import TimePickerLocale from '../../time-picker/locale/ko_KR';

// Merge into a locale object
const locale = {
  lang: {
    placeholder: '날짜 선택',
    rangePlaceholder: ['시작일', '종료일'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};


export default locale;
