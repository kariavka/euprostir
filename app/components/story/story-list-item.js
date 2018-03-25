import Component from '@ember/component';
import {get, computed} from '@ember/object';

export default Component.extend({
  // Computed
  isEven: computed('index', function () {
    const index = get(this, 'index');
    return index === parseFloat(index) ? !(index % 2) : void 0;
  }),
});
