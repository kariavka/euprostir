import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import {get, set} from '@ember/object';
import {reads} from '@ember/object/computed';
import {hash} from 'rsvp';
import config from 'euprostir/config/environment';

export default Route.extend({
  // Services
  store: service(),

  // Title
  title: reads('model.item.title'),

  // Model
  model(params) {
    const store = get(this, 'store');

    return hash({
      item: store.findRecord('event', params.id, {reload: true}),
      items: store.query('event', {
        lira: config.neuronet.uk.events,
        per_page: 4,
        page: 1,
        sort: '-created',
      }).then((data) => {
        return data.rejectBy('id', params.id).slice(0, 3)
      }),
    });
  },

  // After Model
  afterModel(model) {
    const title = get(model, 'item.title');
    set(this, 'title', title);
  },
});
