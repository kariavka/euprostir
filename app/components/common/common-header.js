import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  actions: {
    onMenuMobileClick() {
      $('.menu_mobile').hide('slide');
    },
  },
});
