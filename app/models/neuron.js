import {computed} from '@ember/object';
import {htmlSafe} from '@ember/string';
import DS from 'ember-data';
import isUrl from 'euprostir/utils/is-url';

export default DS.Model.extend({
  // Attributes
  title: DS.attr('string'),
  header: DS.attr('string'),
  summary: DS.attr('string'),
  description: DS.attr('string'),
  url: DS.attr('string'),
  location: DS.attr('string'),
  type_location: DS.attr('string'),
  price: DS.attr('number'),
  online: DS.attr('boolean'),
  language: DS.attr('string'),

  // Stats
  weight: DS.attr('number'),
  views: DS.attr('number'),
  subscriber_count: DS.attr('number'),  // Subscribers count
  comment_count: DS.attr('number'), // Comments count
  axon_count: DS.attr('number'),  // Axons count

  // Datetime
  created: DS.attr('date'),
  updated: DS.attr('date'),
  startdate: DS.attr('date'),
  enddate: DS.attr('date'),

  // Type
  type: DS.attr('string'),
  typeLabel: computed('type', function () {
    let type = this.get('type');
    return type[0].toUpperCase() + type.slice(1, type.length);
  }),

  // Display
  display: DS.attr('string'),

  // Icon
  icon_url: DS.attr('string'),
  iconUrl: computed('icon_url', function () {
    let icon_url = this.get('icon_url');

    if (icon_url && isUrl(icon_url)) {
      return htmlSafe(icon_url);
    }

    return null;
  }),

  // Image
  image_url: DS.attr('string'),
  imageUrl: computed('image_url', function () {
    let image_url = this.get('image_url');

    if (image_url && isUrl(image_url)) {
      return htmlSafe(image_url);
    }

    return null;
  }),
  imageStyle: computed('imageUrl', function () {
    let imageUrl = this.get('imageUrl');
    if (imageUrl && isUrl(imageUrl)) {
      return htmlSafe(`background-image: url(${imageUrl});`);
    }
    return null;
  }),

  // Video
  video_type: DS.attr('string'),
  video_url: DS.attr('string'),
  video_embed_url: DS.attr('string'),

  // Link
  link_url: computed('type', 'title', function () {
    let type = this.get('type');
    let url = this.get('title');
    return (type === 'link') ? `/goto/?url=${encodeURIComponent(url)}` : null;
  }),
});
