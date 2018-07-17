import Component from '@ember/component';
import {get, computed} from '@ember/object';

export default Component.extend({
  href: computed('item.title', function () {
    const title = get(this, 'item.title');
    const url = window.location.href;
    return `https://twitter.com/intent/tweet/?text=${title}&amp;url=${url}`;
  }),
});
