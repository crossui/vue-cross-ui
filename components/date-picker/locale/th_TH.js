import CalendarLocale from '../../vc-calendar/src/locale/th_TH';
import TimePickerLocale from '../../time-picker/locale/th_TH';

// Merge into a locale object
const locale = {
  lang: {
    placeholder: 'เลือกวันที่',
    rangePlaceholder: ['วันเริ่มต้น', 'วันสิ้นสุด'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};


export default locale;
