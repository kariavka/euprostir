import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import { hash } from 'rsvp';
import config from 'euprostir/config/environment';

export default Route.extend({
  // Services
  store: service(),

  // Title
  title: 'Практики - Європейський простір',

  // Params
  queryParams: {
    f: { refreshModel: true }
  },

  // Model
  model(params) {
    const store = get(this, 'store');
    let filter = params.f;
    let lira = filter ? filter :config.neuronet.uk.war.news;

    return hash({
      items: store.query('post', {
        'filter[display]': 'public',
        'filter[language]': 'uk',
        page: 1, per_page: 4, lira,
        sort: '-created',
      }),
      popular: store.query('post', {
        'filter[display]': 'public',
        'filter[language]': 'uk',
        page: 1, per_page: 3, lira,
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
