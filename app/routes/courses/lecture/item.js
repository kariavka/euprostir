import Route from '@ember/routing/route';
import {inject} from '@ember/service';
import {get, set} from '@ember/object';
import {reads} from '@ember/object/computed';
import {hash} from 'rsvp';
import config from 'euprostir/config/environment';

export default Route.extend({
  // Services
  store: inject(),

  // Title
  title: reads('model.item.title'),

  // Model
  model(params) {
    const store = get(this, 'store');

    return hash({
      item: store.findRecord('page', params.id, {reload: true}),
      items: store.query('page', {
        lira: config.neuronet.uk.courses,
        'filter[display]': 'public',
        per_page: 5,
        page: 1,
        sort: '-created',
      }).then((data) => {
        return data.rejectBy('id', params.id).slice(0, 4)
      }),
    });
  },

  // After Model
  afterModel(model) {
    const title = get(model, 'item.title');
    set(this, 'title', title);
  },
});
