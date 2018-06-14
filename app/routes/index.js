import Route from '@ember/routing/route';
import {inject} from '@ember/service';
import {get,} from '@ember/object';
import {hash} from 'rsvp';
import getLira from 'euprostir/utils/get-lira';

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
        lira: getLira('stories'),
        sort: '-created',
        'filter[featured]': true,
      }),
      practices: store.query('post', {
        page: 1,
        per_page: 3,
        lira: getLira('practices'),
        sort: '-created',
        'filter[featured]': true,
      }),
      opportunities: store.query('post', {
        page: 1,
        per_page: 4,
        lira: getLira('opportunities'),
        sort: '-created',
        'filter[featured]': true,
      }),
      courses: store.query('post', {
        page: 1,
        per_page: 4,
        lira: getLira('courses'),
        sort: '-created',
        'filter[featured]': true,
      }),
      events: store.query('post', {
        page: 1,
        per_page: 3,
        lira: getLira('events'),
        sort: '-created',
        'filter[featured]': true,
      }),
    });
  },
});
