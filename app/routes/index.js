import Route from '@ember/routing/route';
import {inject} from '@ember/service';
import {get,} from '@ember/object';
import {hash} from 'rsvp';
import config from 'euprostir/config/environment';

export default Route.extend({
  // Services
  store: inject(),

  // Title
  title: 'Європейський простір',

  // Model
  model() {
    const store = get(this, 'store');

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
