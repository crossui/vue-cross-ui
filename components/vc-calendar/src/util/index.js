import moment from 'moment';

const defaultDisabledTime = {
  disabledHours() {
    return [];
  },
  disabledMinutes() {
    return [];
  },
  disabledSeconds() {
    return [];
  },
};

export function getTodayTime(value) {
  const today = moment();
  today.locale(value.locale()).utcOffset(value.utcOffset());
  return today;
}

export function getTitleString(value) {
  return value.format('LL');
}

export function getTodayTimeStr(value) {
  const today = getTodayTime(value);
  return getTitleString(today);
}

export function getMonthName(month) {
  const locale = month.locale();
  const localeData = month.localeData();
  return localeData[locale === 'zh-cn' ? 'months' : 'monthsShort'](month);
}

export function syncTime(from, to) {
  if (!moment.isMoment(from) || !moment.isMoment(to)) return;
  to.hour(from.hour());
  to.minute(from.minute());
  to.second(from.second());
  to.millisecond(from.millisecond());
}

export function getTimeConfig(value, disabledTime) {
  let disabledTimeConfig = disabledTime ? disabledTime(value) : {};
  disabledTimeConfig = {
    ...defaultDisabledTime,
    ...disabledTimeConfig,
  };
  return disabledTimeConfig;
}

export function isTimeValidByConfig(value, disabledTimeConfig) {
  let invalidTime = false;
  if (value) {
    const hour = value.hour();
    const minutes = value.minute();
    const seconds = value.second();
    const disabledHours = disabledTimeConfig.disabledHours();
    if (disabledHours.indexOf(hour) === -1) {
      const disabledMinutes = disabledTimeConfig.disabledMinutes(hour);
      if (disabledMinutes.indexOf(minutes) === -1) {
        const disabledSeconds = disabledTimeConfig.disabledSeconds(hour, minutes);
        invalidTime = disabledSeconds.indexOf(seconds) !== -1;
      } else {
        invalidTime = true;
      }
    } else {
      invalidTime = true;
    }
  }
  return !invalidTime;
}

export function isTimeValid(value, disabledTime) {
  const disabledTimeConfig = getTimeConfig(value, disabledTime);
  return isTimeValidByConfig(value, disabledTimeConfig);
}

export function isAllowedDate(value, disabledDate, disabledTime) {
  if (disabledDate) {
    if (disabledDate(value)) {
      return false;
    }
  }
  if (disabledTime) {
    if (!isTimeValid(value, disabledTime)) {
      return false;
    }
  }
  return true;
}

export function formatDate(value, format) {
  if (!value) {
    return '';
  }

  if (Array.isArray(format)) {
    format = format[0];
  }

  if (typeof format === 'function') {
    const result = format(value);
    if (typeof result === 'string') {
      return result;
    } else {
      throw new Error('The function of format does not return a string');
    }
  }

  return value.format(format);
}

export function dateSplicing(value) {
  if (value == undefined || value.length < 4) return value
  const date = value.split("")
  if (value.indexOf("-") != -1 && date[4] != "-") {
    return value
  }
  //month
  if (date[4] != "-") {
    date[4] = "-"
  } else {
    if (parseInt(date[5]) > 1) {
      date[6] = date[5]
      date[5] = "0"
      date[7] = "-"
    } else if (parseInt(date[6]) > 2 && parseInt(date[5]) != 0) {
      date[8] = date[6]
      date[7] = "-"
      date[6] = date[5]
      date[5] = "0"
    }
  }

  //date
  if (date[7] && date[7] != "-") {
    if (parseInt(date[8]) > 3) {
      date[9] = date[7]
      date[8] = "0"
    } else {
      date[8] = date[7]
    }
    date[7] = "-"
  } else if (date[8] && parseInt(date[8]) > 3) {
    date[9] = date[8]
    date[8] = "0"
  }

  return date.join("")
}