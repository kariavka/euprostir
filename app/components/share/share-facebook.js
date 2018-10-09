import Component from '@ember/component';
import {get, computed} from '@ember/object';
import {htmlSafe} from '@ember/string';

export default Component.extend({
  // Color
  color: '#542E91',

  // Style
  style: computed('color', function () {
    const color = get(this, 'color');
    return htmlSafe(`color: ${color};`);
  }),

  // Link
  href: computed('item.title', function () {
    const title = get(this, 'item.title');
    const description = get(this, 'item.summary');
    const imageUrl = get(this, 'item.image_url');
    const website = window.location.href;
    return `https://www.facebook.com/sharer.php?caption=${title}&description=${description}&u=${website}&picture=${imageUrl}`;
  }),
});
