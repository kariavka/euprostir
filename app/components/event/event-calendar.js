import Component from '@ember/component';
import {inject as service} from '@ember/service';
import {get, computed} from '@ember/object';
import moment from 'moment';

export default Component.extend({
  // Services
  router: service(),

  // Attributes
  center: null,

  // Computed
  prev: computed('center', function () {
    const date = moment(get(this, 'center'));
    date.add(-1, 'month');
    const month = date.month() + 1;
    const year = date.year();
    return {month, year};
  }),
  next: computed('center', function () {
    const date = moment(get(this, 'center'));
    date.add(1, 'month');
    const month = date.month() + 1;
    const year = date.year();
    return {month, year};
  }),

  // Actions
  actions: {

    changeCenter(calendar, amount, period) {
      const router = get(this, 'router');
      const endpoint = get(this, 'endpoint');
      calendar.actions.moveCenter(amount, period);
      const month = calendar.center.getMonth();
      const m = (month > 0) ? month : 12;
      const y = calendar.center.getFullYear();
      router.transitionTo(endpoint, {queryParams: {m, y}})
    },

  },
});
