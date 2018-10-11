import Component from '@ember/component';
import {inject as service} from '@ember/service';
import {computed, get} from '@ember/object';

export default Component.extend({
  // Services
  media: service(),

  // Properties
  first: computed('items', function () {
    return get(this, 'items.firstObject');
  }),
  courses: computed('items', function () {
    const items = get(this, 'items');
    return items.slice(0, 3);
  }),
});
