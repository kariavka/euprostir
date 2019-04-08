import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import {get, set, computed} from '@ember/object';
import {reads} from '@ember/object/computed';
import {A} from '@ember/array';
import config from 'euprostir/config/environment';

export default Controller.extend({
  // Services
  store: service(),

  // Params
  queryParams: ['s', 't'],
  s: null,
  t: null,

  // Properties
  items: null,
  page: 1,
  per_page: 4,
  pages: reads('model.items.meta.total_pages'),

  // Filters
  filters: null,

  // Flags
  canLoadMore: computed('page', 'pages', function () {
    return get(this, 'page') < get(this, 'pages');
  }),

  // Init
  init: function () {
    this._super();
    const filters = config.neuronet.uk.filters.resources;
    set(this, 'filters', filters);
  },

  // Actions
  actions: {
    loadMore() {
      const store = get(this, 'store');
      let page = get(this, 'page');
      const per_page = get(this, 'per_page');
      const pages = get(this, 'pages');
      const lira = config.neuronet.uk.resources;
      const subject = get(this, 's');
      const type = get(this, 't');
      const filters = [];

      filters.push(lira);
      if (subject) filters.push(subject);
      if (type) filters.push(type);

      const liraWithFilters = (filters.length > 0) ? filters.join(',') : lira;

      if (page <= pages) {
        page = page + 1;
        set(this, 'page', page);
        store.query('post', {
          page, per_page,
          lira: liraWithFilters,
          'filter[display]': 'public',
        }).then((newItems) => {
          let items = A();
          const oldItems = get(this, 'items');
          items.pushObjects(oldItems.toArray());
          items.pushObjects(newItems.toArray());
          set(this, 'items', items);
        });
      }

    },
  }
});
