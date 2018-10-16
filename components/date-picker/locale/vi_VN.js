import CalendarLocale from '../../vc-calendar/src/locale/zh_CN'
import TimePickerLocale from '../../time-picker/locale/zh_CN'

// Merge into a locale object
const locale = {
    lang: {
        placeholder: 'Chọn thời điểm',
        rangePlaceholder: [
            'Ngày bắt đầu', 'Ngày kết thúc',
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