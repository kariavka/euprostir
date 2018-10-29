import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import {get} from '@ember/object';
import {hash} from 'rsvp';
import config from 'euprostir/config/environment';
import moment from 'moment';

export default Route.extend({
  // Services
  store: service(),
  headData: service(),

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
    const dateStart = moment().utc().format('YYYY-MM-DD');

    return hash({
      items: store.query('post', {
        page: 1,
        per_page: 4,
        lira: liraWithFilter,
        date_start: dateStart,
        'filter[display]': 'public',
        sort: '-created',
      }),
      popular: store.query('post', {
        page: 1,
        per_page: 3,
        lira: lira,
        date_start: dateStart,
        'filter[display]': 'public',
        sort: '-views',
      }),
    });
  },

  setupController: function (controller, model) {
    controller.set('showDropdown', false);
    controller.set('model', model);
    controller.set('items', model.items);
  },
});
