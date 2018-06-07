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
  title: 'Можливості - Європейський простір',

  // Params
  queryParams: {
    f: {refreshModel: true}
  },

  // Model
  model(params) {
    const store = get(this, 'store');
    let lira = getLira('opportunities');
    let liraWithFilter;
    let filter = params.f;

    if (filter) {
      liraWithFilter = lira + ',' + filter;
    }

    return hash({
      items: store.query('post', {
        page: 1,
        per_page: 4,
        lira: liraWithFilter
      }),
      popular: store.query('post', {
        page: 1,
        per_page: 3,
        lira: lira,
        sort: '-views'
      }),
    });
  },

  setupController: function (controller, model) {
    controller.set('showDropdown', false);
    controller.set('model', model);
    controller.set('items', model.items);
  },
});
