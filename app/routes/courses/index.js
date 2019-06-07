import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import {get} from '@ember/object';
import {hash} from 'rsvp';
import config from 'euprostir/config/environment';

export default Route.extend({
  // Services
  store: service(),

  // Title
  title: 'Навчальні курси - Європейський простір',

  // Model
  model() {
    const store = get(this, 'store');
    let lira = config.neuronet.uk.courses;
    let liraCourses = lira + ',136412';
    let liraVideos = lira + ',142442';

    return hash({
      popular: store.query('page', {
        page: 1,
        per_page: 6,
        lira: lira,
        sort: 'views,-created',
        'filter[display]': 'public',
        'filter[featured]': true,
      }),
      courses: store.query('page', {
        page: 1,
        per_page: 4,
        lira: liraCourses,
        sort: '-created',
        'filter[display]': 'public',
        'filter[featured]': true,
      }),
      liraCourses,
      videos: store.query('page', {
        page: 1,
        per_page: 4,
        lira: liraVideos,
        sort: '-created',
        'filter[display]': 'public',
        'filter[featured]': true,
      }),
      liraVideos,
    });
  },
});
