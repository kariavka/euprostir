import Component from '@ember/component';
import {get, set, computed} from '@ember/object';

export default Component.extend({
  // Flags
  showDropdown: false,

  // Attributes
  filters: null,
  value: null,

  // Computed
  label: computed('filters.*', 'value', function () {
    const value = get(this, 'value');
    const filters = get(this, 'filters');
    if (!filters) return null;
    const filtered = filters.filter((item) => item.value === value);
    return (filtered.length > 0) ? filtered[0].name : null;
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
