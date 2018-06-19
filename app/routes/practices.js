import Route from '@ember/routing/route';
import {inject} from '@ember/service';
import {set} from '@ember/object';
import moment from 'moment';

export default Route.extend({
  // Services
  i18n: inject(),

  // Before Model
  beforeModel() {
    const locale = 'uk';
    set(this, 'i18n.locale', locale);
    moment.locale(locale);
  },
});
