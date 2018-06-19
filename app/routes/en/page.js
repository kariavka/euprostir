import Route from '@ember/routing/route';
import {inject} from '@ember/service';
import {get, set} from '@ember/object';
import config from 'euprostir/config/environment';

export default Route.extend({
  // Services
  store: inject(),

  // Model
  model(params) {
    const store = get(this, 'store');
    const siteId = config.neuronet.site;
    const path = `/en/${params.uid}/`;

    return get(this, 'store').query('page', {
      'filter[site]': siteId,
      'filter[path]': path,
      per_page: 1,
      page: 1,
    }).then((pages) => {
      let page = get(pages, 'firstObject');
      if (!page) this.transitionTo('en.notfound');
      const pageId = page.id;
      return store.findRecord('page', pageId);
    });
  },

  // After Model
  afterModel(model) {
    const title = get(model, 'title');
    set(this, 'title', title);
  },
});
