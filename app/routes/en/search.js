import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import { hash } from 'rsvp';
import config from 'euprostir/config/environment';

export default Route.extend({
    // Services
    store: service(),

    // Title
    title: 'Search - EU.Prostir',

    // Params
    queryParams: {
        f: { refreshModel: true },
        q: { refreshModel: true },
    },

    // Model
    model(params) {
        const store = get(this, 'store');
        let filter = params.f;
        let lira = filter ? filter : config.neuronet.en.stories;
        let q = params.q;

        return hash({
            items: store.query('post', {
                'filter[display]': 'public',
                'filter[language]': 'en',
                page: 1, per_page: 4, lira, q,
                sort: '-created',
            })
        });
    },

    setupController: function (controller, model) {
        controller.set('showDropdown', false);
        controller.set('model', model);
        controller.set('items', model.items);
    },
});
