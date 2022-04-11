import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import {set} from '@ember/object';
import moment from 'moment';

export default Route.extend({
  // Services
  i18n: service(),

  // Before Model
  beforeModel() {
    const locale = 'uk';
    set(this, 'i18n.locale', locale);
    moment.locale(locale);
  },
});
