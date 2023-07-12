import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';
import { hash } from 'rsvp';
import config from 'euprostir/config/environment';
import moment from 'moment';

export default Route.extend({
    // Services
    store: service(),
    i18n: service(),

    // Title
    title: 'Війна - Європейський простір',

    // Before Model
    beforeModel() {
        const locale = 'uk';
        set(this, 'i18n.locale', locale);
        moment.locale(locale);
    },

    // Model
    model() {
        const store = get(this, 'store');
        const dateStart = moment().format('YYYY-MM-DD');

        return hash({
            news: store.query('post', {
                page: 1,
                per_page: 3,
                lira: config.neuronet.uk.war.news,
                sort: '-created',
                'filter[featured]': true,
                'filter[display]': 'public',
            }),
            stories: store.query('post', {
                page: 1,
                per_page: 9,
                lira: config.neuronet.uk.war.stories,
                sort: '-created',
                'filter[featured]': true,
                'filter[display]': 'public',
            }),
            opportunities: store.query('post', {
                page: 1,
                per_page: 4,
                lira: config.neuronet.uk.war.opportunities,
                sort: '-created',
                date_start: dateStart,
                'filter[featured]': true,
                'filter[display]': 'public',
            }),
        });
    },
});
