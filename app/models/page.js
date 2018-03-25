import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  summary: DS.attr('string'),
  description: DS.attr('string'),
  language: DS.attr('string'),
  created: DS.attr('date'),
  path: DS.attr('string'),

  // Page Name
  pageName: Ember.computed('path', function () {
    let path = this.get('path');
    let start = 4;
    let end = path.length - 1;
    return path.substring(start, end);
  }),

  // Image
  image: DS.belongsTo('neuron'),
  image_url: DS.attr('string'),
  imageStyle: Ember.computed('image_url', function () {
    let url = this.get('image_url');
    if (!url) return;
    return Ember.String.htmlSafe(`background-image: url(${url});`);
  }),

  // Relationships
  author: DS.belongsTo('user'),
});
