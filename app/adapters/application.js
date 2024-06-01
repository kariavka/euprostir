import DS from 'ember-data';
import {computed} from '@ember/object';
import config from 'euprostir/config/environment';

export default DS.JSONAPIAdapter.extend({
    host: config.api.host,
    namespace: 'api/v2',

    // Headers
    headers: computed('config', function () {
        return {
            'X-LivaRava-Site': config.neuronet.site,
            'X-LivaRava-ApiKey': config.api.key,
        };
    }),
});
