import Component from '@ember/component';
import {inject} from '@ember/service';
import {get, set} from '@ember/object';
import config from 'euprostir/config/environment';

export default Component.extend({
  // Store
  store: inject(),
  i18n: inject(),

  // Flags
  isSearchMade: false,

  // Actions
  actions: {
    search() {
      const store = get(this, 'store');
      const q = get(this, 'q');
      const locale = get(this, 'i18n.locale');

      store.query('post', {
        q: q,
        page: 1,
        per_page: 7,
        lira: config.neuronet[locale].stories,
        'filter[site]': config.neuronet.site,
        'filter[language]': locale,
      }).then((results) => {
        set(this, 'isSearchMade', true);
        set(this, 'stories', results);
        return results;
      });

      store.query('post', {
        q: q,
        page: 1,
        per_page: 7,
        lira: config.neuronet[locale].practices,
        'filter[site]': config.neuronet.site,
        'filter[language]': locale,
      }).then((results) => {
        set(this, 'isSearchMade', true);
        set(this, 'practices', results);
        return results;
      });

      store.query('post', {
        q: q,
        page: 1,
        per_page: 7,
        lira: config.neuronet[locale].opportunities,
        'filter[site]': config.neuronet.site,
        'filter[language]': locale,
      }).then((results) => {
        set(this, 'isSearchMade', true);
        set(this, 'opportunities', results);
        return results;
      });
    },
  },
});
