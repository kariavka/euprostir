import DS from 'ember-data';
import {computed, get} from '@ember/object';
import {htmlSafe} from '@ember/string';

export default DS.Model.extend({
  title: DS.attr('string'),
  summary: DS.attr('string'),
  description: DS.attr('string'),
  language: DS.attr('string'),
  created: DS.attr('date'),
  views: DS.attr('number', {defaultValue: 0}),
  comments: DS.attr('number', {defaultValue: 0}),

  // Image
  image: DS.belongsTo('neuron'),
  image_url: DS.attr('string'),
  imageStyle: computed('image_url', function () {
    let url = get(this, 'image_url');
    if (!url) return;
    return htmlSafe(`background-image: url(${url});`);
  }),

  // Relationships
  author: DS.belongsTo('user'),
});
