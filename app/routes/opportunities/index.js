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
    const filter = params.f;
    const lira = filter ? filter : config.neuronet.uk.opportunities;
    const dateStart = moment().utc().format('YYYY-MM-DD');

    return hash({
      items: store.query('post', {
        'filter[display]': 'public',
        'filter[language]': 'uk',
        page: 1, per_page: 4, lira,
        date_start: dateStart,
        sort: '-created',
      }),
      popular: store.query('post', {
        'filter[display]': 'public',
        'filter[language]': 'uk',
        page: 1, per_page: 3, lira,
        date_start: dateStart,
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
