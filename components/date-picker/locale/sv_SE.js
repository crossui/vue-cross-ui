import CalendarLocale from '../../vc-calendar/src/locale/sv_SE'
import TimePickerLocale from '../../time-picker/locale/sv_SE'

const locale = {
  lang: {
    placeholder: 'Välj datum',
    rangePlaceholder: [
      'Startdatum', 'Slutdatum',
    ],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
}

// All settings at:
// /o
// cale/example.json

export default locale
