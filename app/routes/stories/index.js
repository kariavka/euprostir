import Route from '@ember/routing/route';
import {inject} from '@ember/service';
import {get, set} from '@ember/object';
import {reads} from '@ember/object/computed';
import {hash} from 'rsvp';
import getLira from 'euprostir/utils/get-lira';

export default Route.extend({
  // Services
  store: inject(),
  headData: inject(),

  // Title
  title: 'Історії - Європейський простір',

  // Model
  model() {
    const store = get(this, 'store');
    return hash({
      items: store.query('post', {
        page: 1,
        per_page: 4,
        lira: getLira('stories')
      }),
      popular: store.query('post', {
        page: 1,
        per_page: 3,
        lira: getLira('stories'),
        sort: '-views'
      }),
    });
  },

  setupController: function (controller, model) {
    controller.set('model', model);
    controller.set('items', model.items);
  },
});
