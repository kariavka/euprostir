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
