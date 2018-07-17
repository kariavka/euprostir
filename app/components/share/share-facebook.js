import Component from '@ember/component';
import {get, computed} from '@ember/object';

export default Component.extend({
  href: computed('item.title', function () {
    const title = get(this, 'item.title');
    const description = get(this, 'item.summary');
    const imageUrl = get(this, 'item.image_url');
    const website = window.location.href;
    return `https://www.facebook.com/sharer.php?caption=${title}&description=${description}&u=${website}&picture=${imageUrl}`;
  }),
});
