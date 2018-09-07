import Component from '@ember/component';
import {inject} from '@ember/service';
import {computed, get} from '@ember/object';

export default Component.extend({
  // Services
  media: inject(),

  // Properties
  first: computed('items', function () {
    return get(this, 'items.firstObject');
  }),
  courses: computed('items', function () {
    const items = get(this, 'items');
    return items.slice(0, 3);
  }),
});
