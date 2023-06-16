
import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';
import config from 'euprostir/config/environment';

export default Component.extend({
  // Store
  store: service(),
  i18n: service(),
  router: service(),

  // Flags
  isSearchVisible: false,
  isSearchMade: false,

  // Init
  init() {
    this._super(...arguments);
    set(this, 'isSearchVisible', this.get('controller.params.q') ? true : false);
  }
});
