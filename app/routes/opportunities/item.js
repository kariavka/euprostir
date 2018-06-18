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
      item: store.findRecord('post', params.id, {reload: true})
        .then((item) => {
          set(this, 'title', item.title);
          return item;
        }),
      items: store.query('post', {
        lira: config.neuronet.uk.opportunities,
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
    set(this, 'title', get(model, 'title'));
  },
});
