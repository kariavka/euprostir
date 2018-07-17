import DS from 'ember-data';
import {computed} from '@ember/object';
import {htmlSafe} from '@ember/string';

export default DS.Model.extend({
  title: DS.attr('string'),
  summary: DS.attr('string'),
  description: DS.attr('string'),
  language: DS.attr('string'),
  created: DS.attr('date'),
  path: DS.attr('string'),

  // Page Name
  pageName: computed('path', function () {
    let path = this.get('path');
    let start = 4;
    let end = path.length - 1;
    return path.substring(start, end);
  }),

  // Image
  image: DS.belongsTo('neuron'),
  image_url: DS.attr('string'),
  imageStyle: computed('image_url', function () {
    let url = this.get('image_url');
    if (!url) return;
    return htmlSafe(`background-image: url(${url});`);
  }),

  // Relationships
  author: DS.belongsTo('user'),
});
