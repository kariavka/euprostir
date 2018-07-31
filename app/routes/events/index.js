import Route from '@ember/routing/route';
import {inject} from '@ember/service';
import {get} from '@ember/object';
import {hash} from 'rsvp';
import config from 'euprostir/config/environment';

export default Route.extend({
  // Services
  store: inject(),

  // Title
  title: 'Події - Європейський простір',

  // Params
  queryParams: {
    f: {refreshModel: true}
  },

  // Model
  model(params) {
    const store = get(this, 'store');
    let lira = config.neuronet.uk.events;
    let filter = params.f;
    let liraWithFilter = (filter) ? lira + ',' + filter : lira;

    return hash({
      items: store.query('event', {
        page: 1,
        per_page: 5,
        lira: liraWithFilter
      }),
      popular: store.query('event', {
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
