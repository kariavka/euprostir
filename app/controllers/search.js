import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get, set, computed } from '@ember/object';
import { reads } from '@ember/object/computed';
import { A } from '@ember/array';
import config from 'euprostir/config/environment';

export default Controller.extend({
    // Services
    store: service(),

    // Params
    queryParams: ['f', 'q'],
    f: null,
    q: null,

    // Properties
    items: null,
    page: 1,
    pages: reads('model.items.meta.total_pages'),
    
    // Endpoint
    endpoint: computed('f', function () {
        const filters = config.neuronet.uk.filters.search;
        const filter = get(this, 'f');
        let endpoint = filters[0].endpoint;
        for (let i = 0; i < filters.length; i++) {
            if (filters[i].lira === filter) {
                endpoint = filters[i].endpoint;
                break;
            }
        }
        return endpoint;
    }),

    // Model
    model: computed('f', function () {
        const filters = config.neuronet.uk.filters.search;
        const filter = get(this, 'f');
        let model = filters[0].model;
        for (let i = 0; i < filters.length; i++) {
            if (filters[i].lira === filter) {
                model = filters[i].model;
                break;
            }
        }
        return model;
    }),

    // Filters
    filters: null,

    // Flags
    canLoadMore: computed('page', 'pages', function () {
        return get(this, 'page') < get(this, 'pages');
    }),

    // Init
    init: function () {
        this._super();
        const filters = config.neuronet.uk.filters.search;
        set(this, 'filters', filters);
    },

    // Actions
    actions: {
        loadMore() {
            const store = get(this, 'store');
            let page = get(this, 'page');
            let pages = get(this, 'pages');
            let per_page = 4;
            let lira = config.neuronet.uk.stories;
            let filter = get(this, 'f');
            let q = get(this, 'q');

            if (filter) {
                lira = filter;
            }

            if (page <= pages) {
                page = page + 1;
                set(this, 'page', page);
                store.query(model, {
                    'filter[site]': config.neuronet.site,
                    'filter[display]': 'public',
                    'filter[language]': 'uk',
                    page, per_page, lira, q,
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
