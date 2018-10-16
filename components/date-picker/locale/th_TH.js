import CalendarLocale from '../../vc-calendar/src/locale/th_TH'
import TimePickerLocale from '../../time-picker/locale/th_TH'
import assign from 'object-assign'

// Merge into a locale object
const locale = {
  lang: assign({
    placeholder: 'เลือกวันที่',
    rangePlaceholder: ['วันเริ่มต้น', 'วันสิ้นสุด'],
  }, CalendarLocale),
  timePickerLocale: assign({}, TimePickerLocale),
}

// All settings at:
// /o
// cale/example.json

export default locale
