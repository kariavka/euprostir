import Component from '@ember/component';
import {set} from '@ember/object';

export default Component.extend({
  // Flags
  showDropdown: false,

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
