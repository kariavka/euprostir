import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import {get, set} from '@ember/object';
import {hash} from 'rsvp';
import config from 'euprostir/config/environment';

export default Route.extend({
  // Services
  store: service(),

  // Title
  title: 'Ресурси - Європейський простір',
  per_page: 20,

  // Params
  queryParams: {
    s: {refreshModel: true},
    t: {refreshModel: true},
  },

  // Model
  model(params) {
    const store = get(this, 'store');
    const lira = config.neuronet.uk.resources;
    const filters = [];
    const per_page = get(this, 'per_page');

    filters.push(lira);
    if (params.s) filters.push(params.s);
    if (params.t) filters.push(params.t);

    const liraWithFilters = (filters.length > 0) ? filters.join(',') : lira;

    return hash({
      items: store.query('post', {
        page: 1,
        per_page,
        lira: liraWithFilters,
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
    set(controller, 'model', model);
    set(controller, 'items', model.items);
    set(controller, 'page', 1);
    set(controller, 'per_page', get(this, 'per_page'));
  },
});
