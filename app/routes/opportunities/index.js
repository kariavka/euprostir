import Route from '@ember/routing/route';
import {inject} from '@ember/service';
import {get} from '@ember/object';
import {hash} from 'rsvp';
import config from 'euprostir/config/environment';
import moment from 'moment';

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
    const lira = config.neuronet.uk.opportunities;
    const filter = params.f;
    const liraWithFilter = (filter) ? lira + ',' + filter : lira;
    const dateStart = moment().format('YYYY-MM-DD');

    return hash({
      items: store.query('post', {
        page: 1,
        per_page: 4,
        lira: liraWithFilter,
        date_start: dateStart,
      }),
      popular: store.query('post', {
        page: 1,
        per_page: 3,
        lira: lira,
        sort: '-views',
        date_start: dateStart,
      }),
    });
  },

  setupController: function (controller, model) {
    controller.set('showDropdown', false);
    controller.set('model', model);
    controller.set('items', model.items);
  },
});
