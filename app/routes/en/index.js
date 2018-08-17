import Route from '@ember/routing/route';
import {inject} from '@ember/service';
import {get,} from '@ember/object';
import {hash} from 'rsvp';
import config from 'euprostir/config/environment';

export default Route.extend({
  // Services
  store: inject(),

  // Title
  title: 'EU.Prostir',

  // Model
  model() {
    const store = get(this, 'store');

    return hash({
      stories: store.query('post', {
        page: 1,
        per_page: 9,
        lira: config.neuronet.en.stories,
        sort: '-created',
        'filter[featured]': true,
        'filter[display]': 'public',
      }),
      practices: store.query('post', {
        page: 1,
        per_page: 3,
        lira: config.neuronet.en.practices,
        sort: '-created',
        'filter[featured]': true,
        'filter[display]': 'public',
      }),
    });
  },
});
