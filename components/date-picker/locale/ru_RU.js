/**
 * Created by Andrey Gayvoronsky on 13/04/16.
 */

import CalendarLocale from '../../vc-calendar/src/locale/ru_RU'
import TimePickerLocale from '../../time-picker/locale/ru_RU'

const locale = {
  lang: {
    placeholder: 'Выберите дату',
    rangePlaceholder: [
      'Начальная дата', 'Конечная дата',
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
