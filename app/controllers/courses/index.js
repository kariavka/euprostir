import Controller from '@ember/controller';
import {inject} from '@ember/service';
import {get, set, computed} from '@ember/object';
import {reads} from '@ember/object/computed';
import {A} from '@ember/array';
import getLira from 'euprostir/utils/get-lira';

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

    const filters = [{
      name: 'Візії розвитку громадянського суспільства',
      lira: 133129,
    }, {
      name: 'Соціальне підприємництво',
      lira: 38405,
    }, {
      name: 'Соціальні послуги стратегії',
      lira: 133132,
    }, {
      name: 'Управління організаціями',
      lira: 133134,
    }, {
      name: 'Ефективні комунікації',
      lira: 133136,
    }];

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
      let pages = get(this, 'pages');
      let lira = getLira('courses');
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
