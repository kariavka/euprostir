import DS from 'ember-data';
import {get, computed} from '@ember/object';
import {htmlSafe} from '@ember/string';
import isUrl from 'euprostir/utils/is-url';

export default DS.Model.extend({
  title: DS.attr('string'),
  type: 'post',
  display: DS.attr('string'),
  featured: DS.attr('boolean'),
  language: DS.attr('string'),
  summary: DS.attr('string'),
  description: DS.attr('string'),
  location: DS.attr('string'),

  // Stats
  weight: DS.attr('number', {defaultValue: 0}),
  views: DS.attr('number', {defaultValue: 0}),
  subscriber_count: DS.attr('number', {defaultValue: 0}),  // Subscribers count
  comment_count: DS.attr('number', {defaultValue: 0}), // Comments count
  axon_count: DS.attr('number', {defaultValue: 0}),  // Axons count

  // Datetime
  created: DS.attr('datetime'),
  updated: DS.attr('datetime'),
  startdate: DS.attr('datetime'),
  enddate: DS.attr('datetime'),

  // Icon
  icon: DS.belongsTo('neuron'),
  icon_url: DS.attr('string'),
  iconUrl: computed('icon', 'icon_url', function () {
    let icon_url = this.get('icon_url');

    if (icon_url && isUrl(icon_url)) {
      return icon_url;
    }

    return null;
  }),

  // Image
  image: DS.belongsTo('neuron'),
  image_url: DS.attr('string'),
  imageStyle: computed('image_url', function () {
    let url = get(this, 'image_url');
    if (!url) return;
    return htmlSafe(`background-image: url(${url});`);
  }),

  // Relationships

  site: DS.belongsTo('neuron'),
  author: DS.belongsTo('user'),
  organizer: DS.belongsTo('neuron'),

  // Computed
  isOneDayEvent: computed('startdate', 'enddate', function () {
    const startday = get(this, 'startdate').format('YYYY-MM-DD');
    const endday = get(this, 'enddate').format('YYYY-MM-DD');
    return (startday === endday);
  }),
  isStartEndSameDay: computed('startdate', 'enddate', function () {
    const startday = get(this, 'startdate').format('YYYY-MM-DD');
    const endday = get(this, 'enddate').format('YYYY-MM-DD');
    return (startday === endday);
  }),
  isNotStartEndSameMonth: computed('startdate', 'enddate', function () {
    const startmonth = get(this, 'startdate').format('YYYY-MM');
    const endmonth = get(this, 'enddate').format('YYYY-MM');
    return (startmonth !== endmonth);
  }),
});
