import Route from '@ember/routing/route';
import {inject} from '@ember/service';
import {get, set} from '@ember/object';
import {hash} from 'rsvp';
import config from 'euprostir/config/environment';
import moment from 'moment';

export default Route.extend({
  // Services
  store: inject(),
  i18n: inject(),

  // Title
  title: 'Європейський простір',

  // Before Model
  beforeModel() {
    const locale = 'uk';
    set(this, 'i18n.locale', locale);
    moment.locale(locale);
  },

  // Model
  model() {
    const store = get(this, 'store');
    const dateStart = moment().format('YYYY-MM-DD');

    return hash({
      stories: store.query('post', {
        page: 1,
        per_page: 9,
        lira: config.neuronet.uk.stories,
        sort: '-created',
        'filter[featured]': true,
      }),
      practices: store.query('post', {
        page: 1,
        per_page: 3,
        lira: config.neuronet.uk.practices,
        sort: '-created',
        'filter[featured]': true,
      }),
      opportunities: store.query('post', {
        page: 1,
        per_page: 4,
        lira: config.neuronet.uk.opportunities,
        sort: '-created',
        date_start: dateStart,
        'filter[featured]': true,
      }),
      courses: store.query('post', {
        page: 1,
        per_page: 4,
        lira: config.neuronet.uk.courses,
        sort: '-created',
        'filter[featured]': true,
      }),
      events: store.query('post', {
        page: 1,
        per_page: 3,
        lira: config.neuronet.uk.events,
        sort: '-created',
        'filter[featured]': true,
      }),
    });
  },
});
