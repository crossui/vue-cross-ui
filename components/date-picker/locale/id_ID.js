import CalendarLocale from '../../vc-calendar/src/locale/id_ID';
import TimePickerLocale from '../../time-picker/locale/id_ID';

// Merge into a locale object
const locale = {
  lang: {
    placeholder: 'Pilih tanggal',
    rangePlaceholder: ['Mulai tanggal', 'Tanggal akhir'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};


export default locale;
