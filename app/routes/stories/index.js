import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import {get} from '@ember/object';
import {hash} from 'rsvp';
import config from 'euprostir/config/environment';

export default Route.extend({
  // Services
  store: service(),

  // Title
  title: 'Історії - Європейський простір',

  // Params
  queryParams: {
    f: {refreshModel: true}
  },

  // Model
  model(params) {
    const store = get(this, 'store');
    let lira = config.neuronet.uk.stories;
    let filter = params.f;
    let liraWithFilter = (filter) ? lira + ',' + filter : lira;

    return hash({
      items: store.query('post', {
        page: 1,
        per_page: 4,
        lira: liraWithFilter,
        'filter[display]': 'public',
      }),
      popular: store.query('post', {
        page: 1,
        per_page: 3,
        lira: lira,
        sort: '-views',
        'filter[display]': 'public',
      }),
    });
  },

  setupController: function (controller, model) {
    controller.set('showDropdown', false);
    controller.set('model', model);
    controller.set('items', model.items);
  },
});
