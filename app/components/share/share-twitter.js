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
    const url = window.location.href;
    return `https://twitter.com/intent/tweet/?text=${title}&amp;url=${url}`;
  }),
});
