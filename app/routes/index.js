import Route from '@ember/routing/route';
import {inject} from '@ember/service';
import {get, set} from '@ember/object';
import {reads} from '@ember/object/computed';
import {hash} from 'rsvp';
import config from 'euprostir/config/environment';
import getLira from 'euprostir/utils/get-lira';

export default Route.extend({
  // Services
  store: inject(),
  headData: inject(),

  // Title
  title: 'Європейський простір',

  // Model
  model() {
    const store = get(this, 'store');
    return hash({
      stories: store.query('post', {page: 1, per_page: 4, lira: config.neuronet.stories}),
    });
  },
});
