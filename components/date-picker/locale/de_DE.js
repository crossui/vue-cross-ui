import CalendarLocale from '../../vc-calendar/src/locale/de_DE'
import TimePickerLocale from '../../time-picker/locale/de_DE'

// Merge into a locale object
const locale = {
  lang: {
    placeholder: 'Datum auswählen',
    rangePlaceholder: [
      'Startdatum', 'Enddatum',
    ],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
}

// All settings at: //424

export default locale
