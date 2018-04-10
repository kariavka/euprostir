import Route from '@ember/routing/route';
import {inject} from '@ember/service';
import {get, set} from '@ember/object';
import {reads} from '@ember/object/computed';
import {hash} from 'rsvp';

export default Route.extend({
  // Services
  store: inject(),
  headData: inject(),

  // Title
  title: reads('model.item.title'),

  // Model
  model(params) {
    const store = get(this, 'store');
    return hash({
      item: store.findRecord('page', 132601),
    });
  },
});
