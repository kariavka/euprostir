import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import {get} from '@ember/object';
import {hash} from 'rsvp';
import config from 'euprostir/config/environment';

export default Route.extend({
  // Services
  store: service(),

  // Title
  title: 'Навчальні курси - Європейський простір',

  // Params
  queryParams: {
    f: {refreshModel: true}
  },

  // Model
  model(params) {
    const store = get(this, 'store');
    let lira = config.neuronet.uk.courses;
    let filter = params.f;
    let liraWithFilter = (filter) ? lira + ',' + filter : lira;

    return hash({
      items: store.query('page', {
        page: 1,
        per_page: 4,
        lira: liraWithFilter,
        sort: '-created',
        'filter[display]': 'public',
      }),
      popular: store.query('page', {
        page: 1,
        per_page: 6,
        lira: lira,
        sort: 'views,-created',
        'filter[display]': 'public',
        'filter[featured]': true,
      }),
    });
  },

  setupController: function (controller, model) {
    controller.set('showDropdown', false);
    controller.set('model', model);
    controller.set('items', model.items);
  },
});
