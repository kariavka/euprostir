import Component from '@ember/component';
import {inject as service} from '@ember/service';
import {get, set, computed} from '@ember/object';
import {reads} from '@ember/object/computed';
import {A} from '@ember/array';

export default Component.extend({
  // Services
  store: service(),

  // Properties
  itemsInitial: null,
  items: null,
  page: 1,
  pages: reads('itemsInitial.meta.total_pages'),
  per_page: reads('itemsInitial.meta.per_page'),
  lira: null,
  hasMore: computed('pages', 'page', function () {
    const pages = parseInt(get(this, 'pages'));
    const page = parseInt(get(this, 'page'));
    return pages > page;
  }),

  didReceiveAttrs() {
    this._super(...arguments);
    let items = A();
    let itemsInitial = get(this, 'itemsInitial');

    if (itemsInitial) {
      items.pushObjects(itemsInitial.toArray());
    }

    set(this, 'items', items);
  },

  actions: {

    loadMore() {
      let store = get(this, 'store');
      let page = parseInt(get(this, 'page')) + 1;
      let per_page = parseInt(get(this, 'per_page'));
      let lira = get(this, 'lira');

      set(this, 'isLoading', true);
      set(this, 'page', page);

      store.query('page', {
        page, per_page, lira,
        sort: '-created',
        'filter[display]': 'public',
        'filter[featured]': true,
      }).then((itemsNew) => {
        let items = A();
        let itemsCurrent = get(this, 'items');
        items.pushObjects(itemsCurrent.toArray());
        items.pushObjects(itemsNew.toArray());
        set(this, 'items', items);
        set(this, 'isLoading', false);
      });

    },

  },
});
