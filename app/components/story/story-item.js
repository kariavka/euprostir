import Component from '@ember/component';
import {inject} from '@ember/service';

export default Component.extend({
  // Services
  i18n: inject(),

  didRender() {
    this._super(...arguments);
  },
});
