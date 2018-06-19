import Component from '@ember/component';
import {inject} from '@ember/service';
import {get, set, computed} from '@ember/object';
import $ from 'jquery';

export default Component.extend({
  // Services
  media: inject(),
  router: inject(),

  // Properties
  isFixedMenu: false,
  isStoryItem: computed('router.currentRouteName', function () {
    const currentRoute = get(this, 'router.currentRouteName');
    return (currentRoute === 'en.stories.item');
  }),

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
        // if (isStoryItem) sectMenu.addClass('sect-menu-inverted');

        sectMenu.removeClass('menu-fixed');
        // sectMenu.removeClass('sect-menu-inverted');
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
