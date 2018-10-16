import CalendarLocale from '../../vc-calendar/src/locale/ar_EG'
import TimePickerLocale from '../../time-picker/locale/ar_EG'

// Merge into a locale object
const locale = {
  lang: {
    placeholder: 'اختيار التاريخ',
    rangePlaceholder: ['البداية', 'النهاية'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
}

// All settings at:
// /ocale/example.json

export default locale
