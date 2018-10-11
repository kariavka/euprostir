import Component from '@ember/component';
import {get, set, computed} from '@ember/object';
import config from 'euprostir/config/environment';

export default Component.extend({
  // Properties
  subjectFilters: null,
  typeFilters: null,

  init() {
    this._super(...arguments);
    const subjectFilters = config.neuronet.uk.filters.resources.subjects;
    const typeFilters = config.neuronet.uk.filters.resources.types;

    set(this, 'subjectFilters', subjectFilters);
    set(this, 'typeFilters', typeFilters);
  },
});
