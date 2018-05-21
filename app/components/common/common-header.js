import Component from '@ember/component';
import {inject} from '@ember/service';
import $ from 'jquery';

export default Component.extend({
  // Services
  media: inject(),

  // Actions
  actions: {
    onMenuMobileClick() {
      $('.menu_mobile').hide('slide');
    },
  },
});
