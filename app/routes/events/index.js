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
    f: {refreshModel: true},
    m: {refreshModel: true},
    y: {refreshModel: true},
  },

  // Model
  model(params) {
    const store = get(this, 'store');
    const lira = config.neuronet.uk.events;
    const filter = params.f;
    const liraWithFilter = (filter) ? lira + ',' + filter : lira;
    const date = params.m + params.y;

    return hash({
      items: store.query('event', {
        page: 1,
        per_page: 5,
        lira: liraWithFilter,
        date
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
