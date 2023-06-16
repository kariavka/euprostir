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
        let lira = config.neuronet.uk.stories;
        let filter = params.f;
        let search = params.q;
        let liraWithFilter = (filter) ? lira + ',' + filter : lira;

        return hash({
            items: store.query('post', {
                page: 1,
                per_page: 4,
                lira: liraWithFilter,
                q: search,
                'filter[display]': 'public',
                'filter[language]': 'uk',
                sort: '-created',
            }),
            popular: store.query('post', {
                page: 1,
                per_page: 3,
                lira: lira,
                'filter[display]': 'public',
                'filter[language]': 'uk',
                sort: '-views',
            }),
        });
    },

    setupController: function (controller, model) {
        controller.set('showDropdown', false);
        controller.set('model', model);
        controller.set('items', model.items);
    },
});
