import Route from '@ember/routing/route';
import {inject} from '@ember/service';
import {get, set} from '@ember/object';
import config from 'euprostir/config/environment';

export default Route.extend({
  // Services
  store: inject(),
  router: inject(),

  // Model
  model(params) {
    const store = get(this, 'store');
    const siteId = config.neuronet.site;
    const path = `/${params.uid}/`;

    return get(this, 'store').query('page', {
      'filter[site]': siteId,
      'filter[path]': path,
      per_page: 1,
      page: 1,
    }).then((pages) => {
      let page = get(pages, 'firstObject');
      if (!page) {
        this.transitionTo('notfound');
      }
      return store.findRecord('page', page.id);
    });
  },

  // After Model
  afterModel(model) {
    const url = config.site.url + get(this, 'router.url');
    const description = get(model, 'summary');
    set(this, 'headTags', [{
      type: 'meta',
      tagId: 'meta-description',
      attrs: {
        name: 'description',
        content: description,
      }
    }, {
      type: 'link',
      tagId: 'canonical-link',
      attrs: {
        rel: 'canonical',
        content: url
      }
    }]);
  },

});
