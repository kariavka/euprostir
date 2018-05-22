import Component from '@ember/component';
import {inject} from '@ember/service';
import {get, set} from '@ember/object';
import $ from 'jquery';

export default Component.extend({
  // Services
  media: inject(),

  // Properties
  isFixedMenu: false,

  // Hooks
  didRender() {
    this._super(...arguments);
    const media = get(this, 'media');
    const hideStart = 100;
    const showStart = 160;

    $(window).scroll(function () {
      const isFixedMenu = get(this, 'isFixedMenu');
      const scroll = $(window).scrollTop();
      const sectMenu = $('.sect-menu');

      if (media.isMobile) return;

      if (scroll < hideStart) {
        sectMenu.removeClass('menu-fixed');
        sectMenu.show();
        set(this, 'isFixedMenu', false);
      } else if (scroll >= showStart) {
        if (isFixedMenu) return;

        sectMenu.hide();
        sectMenu.addClass('menu-fixed');
        sectMenu.slideDown();
        set(this, 'isFixedMenu', true);
      }
    });

  },
});
