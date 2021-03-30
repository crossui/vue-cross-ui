import CalendarLocale from '../../vc-calendar/src/locale/zh_CN';
import TimePickerLocaleOption from '../../time-picker/locale/zh_CN';

const locale = {
  lang: {
    placeholder: '请选择日期',
    rangePlaceholder: ['开始日期', '结束日期'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocaleOption,
  }
};

locale.lang.ok = '确 定';


export default locale;
