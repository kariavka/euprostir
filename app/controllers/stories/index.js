import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    toggleDropdown() {
      this.toggleProperty('showDropdown');
    }
  }
});
