import {helper} from '@ember/component/helper';
import moment from 'moment';

export function eventCalendarDay(params/*, hash*/) {
  const day = params[0];
  const items = params[1];
  let found = 0;

  items.forEach((item) => {
    const start = item.startdate;
    const end = item.enddate;
    const current = day.moment;

    if (start && current && start.year() === current.year() && start.month() === current.month() && start.date() === current.date()) {
      found += 1;
    }

    if (end && current && end.year() === current.year() && end.month() === current.month() && end.date() === current.date()) {
      found += 1;
    }
  });

  const date = day.moment.date();

  if (found > 0) {
    return `<div class="active">${date}</div>`;
  } else {
    return `<div class="unactive">${date}</div>`;
  }
}

export default helper(eventCalendarDay);
