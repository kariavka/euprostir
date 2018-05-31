import Controller from '@ember/controller';
import {inject} from '@ember/service';
import {get, set, computed} from '@ember/object';
import {reads} from '@ember/object/computed';
import {A} from '@ember/array';
import getLira from 'euprostir/utils/get-lira';

export default Controller.extend({
  // Services
  store: inject(),

  // Properties
  items: null,
  page: 1,
  pages: reads('model.items.meta.total_pages'),
  canLoadMore: computed('page', 'pages', function () {
    return get(this, 'page') < get(this, 'pages');
  }),

  // Actions
  actions: {
    toggleDropdown() {
      this.toggleProperty('showDropdown');
    },

    loadMore() {
      const store = get(this, 'store');
      let page = get(this, 'page');
      let pages = get(this, 'pages');

      debugger;

      if (page <= pages) {
        page = page + 1;
        set(this, 'page', page);
        store.query('post', {
          page: page,
          per_page: 4,
          lira: getLira('stories')
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
