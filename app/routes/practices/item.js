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
  title: reads('model.item.title'),

  // Model
  model(params) {
    const store = get(this, 'store');
    return hash({
      item: store.findRecord('post', params.id)
        .then((item) => {
          set(this, 'title', item.title);
          return item;
        }),
      items: store.query('post', {
        lira: getLira('practices'),
        per_page: 4,
        page: 1,
        sort: '-created',
      }).then((data) => {
        return data.rejectBy('id', params.id).slice(0, 3)
      }),
    });
  },
});
