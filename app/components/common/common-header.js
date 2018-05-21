import Component from '@ember/component';
import {inject} from '@ember/service';
import $ from 'jquery';

export default Component.extend({
  // Services
  media: inject(),

  // Hooks
  didRender() {
    this._super(...arguments);
    let scrollStart = 160;
    $(window).scroll(function () {
      let scroll = $(window).scrollTop();
      if (scroll >= scrollStart) {
        $('.menu_fixed').addClass('show');
      }
      else {
        $('.menu_fixed').removeClass('show');
      }
    });

  },

  // Actions
  actions: {
    onMenuMobileClick() {
      $('.menu_mobile').hide('slide');
    },
  },
});
