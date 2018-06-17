import Route from '@ember/routing/route';
import {inject} from '@ember/service';
import {get, set} from '@ember/object';
import {hash} from 'rsvp';
import getLira from 'euprostir/utils/get-lira';

export default Route.extend({
  // Services
  store: inject(),

  // Model
  model(params) {
    const store = get(this, 'store');

    return hash({
      item: store.findRecord('post', params.id, {reload: true}),
      items: store.query('post', {
        lira: getLira('stories'),
        per_page: 4,
        page: 1,
        sort: '-created',
      }).then((data) => {
        return data.rejectBy('id', params.id).slice(0, 3)
      }),
    });
  },

  afterModel(model) {
    const title = get(model, 'item.title');
    set(this, 'title', title);
  },
});
