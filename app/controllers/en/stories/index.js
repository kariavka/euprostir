import Controller from '@ember/controller';
import {inject} from '@ember/service';
import {get, set, computed} from '@ember/object';
import {reads} from '@ember/object/computed';
import {A} from '@ember/array';
import config from 'euprostir/config/environment';

export default Controller.extend({
  // Services
  store: inject(),

  // Params
  queryParams: ['f'],
  f: null,

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
    const filters = config.neuronet.en.filters;
    set(this, 'filters', filters);
  },

  // Actions
  actions: {
    loadMore() {
      const store = get(this, 'store');
      let page = get(this, 'page');
      let pages = get(this, 'pages');
      let lira = config.neuronet.en.stories;
      let filter = get(this, 'f');

      if (filter) {
        lira = lira + ',' + filter;
      }

      if (page <= pages) {
        page = page + 1;
        set(this, 'page', page);
        store.query('post', {
          page: page,
          per_page: 4,
          lira: lira
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
