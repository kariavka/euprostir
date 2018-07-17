import Route from '@ember/routing/route';
import {makeArray} from '@ember/array';
import {inject} from '@ember/service';
import {set} from '@ember/object';
import ResetScrollMixin from 'ember-cli-reset-scroll';
import LoadingSliderMixin from '../mixins/loading-slider';
import moment from 'moment';

export default Route.extend(
  LoadingSliderMixin,
  ResetScrollMixin,
  {
    // Service
    i18n: inject(),

    // Title
    title: function (tokens) {
      tokens = makeArray(tokens);
      tokens.unshift('Європейський простір');
      return tokens.reverse().join(' - ');
    },

    // Before Model
    beforeModel() {
      const locale = 'uk';
      set(this, 'i18n.locale', locale);
      moment.locale(locale);
    },
  }
);
