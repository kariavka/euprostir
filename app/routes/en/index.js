import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import {get,} from '@ember/object';
import {hash} from 'rsvp';
import config from 'euprostir/config/environment';

export default Route.extend({
  // Services
  store: service(),

  // Title
  title: 'EU.Prostir',

  // Model
  model() {
    const store = get(this, 'store');

    return hash({
      stories: store.query('post', {
        'filter[featured]': true,
        'filter[display]': 'public',
        page: 1, per_page: 9, lira: config.neuronet.en.stories,
        sort: '-created',
      }),
      practices: store.query('post', {
        'filter[featured]': true,
        'filter[display]': 'public',
        page: 1, per_page: 3, lira: config.neuronet.en.practices,
        sort: '-created',
      }),
    });
  },
});
