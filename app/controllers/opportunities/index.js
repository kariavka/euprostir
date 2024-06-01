import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get, set, computed } from '@ember/object';
import { reads } from '@ember/object/computed';
import { A } from '@ember/array';
import config from 'euprostir/config/environment';
import moment from 'moment';

export default Controller.extend({
  // Services
  store: service(),

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
    const filters = config.neuronet.uk.filters.opportunities;
    set(this, 'filters', filters);
  },

  // Actions
  actions: {
    toggleDropdown() {
      this.toggleProperty('showDropdown');
    },

    loadMore() {
      const store = get(this, 'store');
      let page = get(this, 'page');
      let per_page = 4;
      const pages = get(this, 'pages');
      const filter = get(this, 'f');
      const lira = (filter) ? filter : config.neuronet.uk.opportunities;
      const dateStart = moment().format('YYYY-MM-DD');

      if (page <= pages) {
        page = page + 1;
        set(this, 'page', page);
        store.query('post', {
          'filter[display]': 'public',
          'filter[language]': 'uk',
          page, per_page, lira,
          date_start: dateStart,
          sort: '-created',
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
