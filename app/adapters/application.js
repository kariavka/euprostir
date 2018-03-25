import DS from 'ember-data';
import config from 'euprostir/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.api.host,
  namespace: 'api/v2',

  // Headers
  headers: function () {
    return {'X-LivaRava-ApiKey': config.api.key};
  }.property(),
});
