import CalendarLocale from '../../vc-calendar/src/locale/zh_CN'
import TimePickerLocale from '../../time-picker/locale/tr_TR'

// Merge into a locale object
const locale = {
    lang: {
        placeholder: 'Tarih Seç',
        rangePlaceholder: [
            'Başlangıç Tarihi', 'Bitiş Tarihi',
        ],
        ...CalendarLocale,
    },
    timePickerLocale: {
        ...TimePickerLocale,
    },
}

// All settings at:
// /
// o cale/example.json

export default locale