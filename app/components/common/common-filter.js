import Component from '@ember/component';
import {get, set, computed} from '@ember/object';

export default Component.extend({
  // Properties
  filters: null,
  currentFilter: null,

  // Flags
  showDropdown: false,

  // Computed
  currentFilterLabel: computed('filters', 'currentFilter', function () {
    const filters = get(this, 'filters');
    const currentFilter = parseInt(get(this, 'currentFilter'));
    let currentLabel;
    for (let i = 0; i < filters.length; i++) {
      if (filters[i].lira === currentFilter) {
        currentLabel = filters[i].name;
      }
    }
    return currentLabel;
  }),

  // Actions
  actions: {

    toggleDropdown() {
      this.toggleProperty('showDropdown');
    },

    closeDropdown() {
      set(this, 'showDropdown', false);
    },

  }
});
