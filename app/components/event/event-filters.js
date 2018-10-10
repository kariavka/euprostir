import Component from '@ember/component';
import {get, set, computed} from '@ember/object';
import config from 'euprostir/config/environment';

export default Component.extend({
  // Properties
  filters: null,
  currentFilter: null,

  init() {
    this._super(...arguments);
    const filters = config.neuronet.uk.filters.events;
    set(this, 'filters', filters);
  },

  // Computed
  currentFilterLabel: computed('filters', 'currentFilter', function () {
    const filters = get(this, 'filters');
    const currentFilter = parseInt(get(this, 'currentFilter'));
    let currentLabel = null;
    for (let i = 0; i < filters.length; i++) {
      const lira = parseInt(filters[i].lira);
      const name = filters[i].name;
      if (lira === currentFilter) {
        currentLabel = name;
      }
    }
    return currentLabel;
  }),
});
