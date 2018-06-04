import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  // Actions
  actions: {
    scrollToTop() {
      $('html,body').animate({scrollTop: 0}, 'fast');
      return false;
    }
  },
});
