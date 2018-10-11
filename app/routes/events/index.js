import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import {get, set} from '@ember/object';
import {hash} from 'rsvp';
import moment from 'moment';
import config from 'euprostir/config/environment';


export default Route.extend({
  // Services
  store: service(),

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
    const now = moment();
    const month = params.m || now.month() + 1;
    const year = params.y || now.year();

    return hash({
      items: store.query('event', {
        page: 1,
        per_page: 5,
        lira: liraWithFilter,
        month, year
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
    const now = moment();
    const nowMonth = now.month() + 1;
    const nowYear = now.year();
    const paramMonth = parseInt(get(controller, 'm'));
    const paramYear = parseInt(get(controller, 'y'));
    const month = paramMonth || nowMonth;
    const year = paramYear || nowYear;
    const date = new Date(year, month - 1, 1);

    set(controller, 'isLoading', false);
    set(controller, 'date', date);
    set(controller, 'month', month);
    set(controller, 'year', year);
    set(controller, 'model', model);
    set(controller, 'items', model.items);
  },

  actions: {

    loading(transition, originRoute) {
      const controller = this.controllerFor('events.index');
      set(controller, 'isLoading', true);
      return true; // allows the loading template to be shown
    },

  },
});
