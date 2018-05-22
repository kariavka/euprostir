import Component from '@ember/component';
import {computed, get} from '@ember/object';

export default Component.extend({
  first: computed('items', function () {
    return get(this, 'items.firstObject');
  }),
  nextThree: computed('items', function () {
    const items = get(this, 'items');
    return items.slice(1, 4);
  }),
});
