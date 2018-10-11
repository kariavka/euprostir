import Component from '@ember/component';
import {get, set, computed} from '@ember/object';
import config from 'euprostir/config/environment';

export default Component.extend({
  // Properties
  subjectFilters: null,
  monthFilters: null,
  yearFilters: null,

  // Init
  init() {
    this._super(...arguments);
    const subjectFilters = config.neuronet.uk.filters.events;
    const monthFilters = [
      {value: '1', name: 'Січень'},
      {value: '2', name: 'Лютий'},
      {value: '3', name: 'Березнь'},
      {value: '4', name: 'Квітень'},
      {value: '5', name: 'Травень'},
      {value: '6', name: 'Червень'},
      {value: '7', name: 'Липень'},
      {value: '8', name: 'Серпень'},
      {value: '9', name: 'Вересень'},
      {value: '10', name: 'Жовтень'},
      {value: '11', name: 'Листопад'},
      {value: '12', name: 'Грудень'},
    ];
    const yearFilters = [
      {value: '2018', name: '2018'},
      {value: '2019', name: '2019'},
    ];

    set(this, 'subjectFilters', subjectFilters);
    set(this, 'monthFilters', monthFilters);
    set(this, 'yearFilters', yearFilters);
  },
});
