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
  queryParams: ['f', 'm', 'y'],
  f: null,
  m: null,
  y: null,

  // Properties
  items: null,
  page: 1,
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
    const filters = config.neuronet.uk.filters.events;
    set(this, 'filters', filters);
  },

  // Actions
  actions: {
    toggleDropdown() {
      this.toggleProperty('showDropdown');
    },

    loadMore() {
      const store = get(this, 'store');
      const per_page = get(this, 'per_page');
      const pages = get(this, 'pages');
      const filter = get(this, 'f');
      const month = get(this, 'month');
      const year = get(this, 'year');
      let page = get(this, 'page');
      let lira = config.neuronet.uk.events;

      if (filter) {
        lira = filter;
      }

      if (page <= pages) {
        page = page + 1;
        set(this, 'page', page);
        store.query('event', {
          page, per_page,
          lira, month, year,
          sort: '-startdate',
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
