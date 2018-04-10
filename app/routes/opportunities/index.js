import Route from '@ember/routing/route';
import {inject} from '@ember/service';
import {get} from '@ember/object';
//import {reads} from '@ember/object/computed';
import {hash} from 'rsvp';
import getLira from 'euprostir/utils/get-lira';

export default Route.extend({
  // Services
  store: inject(),
  headData: inject(),

  // Title
  title: 'Можливості - Європейський простір',

  // Model
  model() {
    const store = get(this, 'store');
    return hash({
      items: store.query('post', {
        page: 1,
        per_page: 9,
        lira: getLira('opportunities'),
        sort: '-created',
      }),
    });
  },
});
