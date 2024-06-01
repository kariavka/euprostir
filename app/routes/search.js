import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import { hash } from 'rsvp';
import config from 'euprostir/config/environment';

export default Route.extend({
    // Services
    store: service(),

    // Title
    title: 'Пошук - Європейський простір',

    // Params
    queryParams: {
        f: { refreshModel: true },
        q: { refreshModel: true },
    },

    // Model
    model(params) {
        const store = get(this, 'store');
        let page = params.page;
        let per_page = 4;
        let filter = params.f;
        let q = params.q;
        let lira = filter ? filter : config.neuronet.site;

        return hash({
            items: store.query('post', {
                'filter[display]': 'public',
                'filter[language]': 'uk',
                page, per_page, lira, q,
                sort: '-created',
            }),
        });
    },

    setupController: function (controller, model) {
        controller.set('showDropdown', false);
        controller.set('model', model);
        controller.set('items', model.items);
    },
});
