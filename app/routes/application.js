import Route from '@ember/routing/route';
import {makeArray} from '@ember/array';
import ResetScrollMixin from 'ember-cli-reset-scroll';
import LoadingSliderMixin from '../mixins/loading-slider';
import moment from 'moment';

export default Route.extend(
  LoadingSliderMixin,
  ResetScrollMixin,
  {
    title: function (tokens) {
      tokens = makeArray(tokens);
      tokens.unshift('Європейський простір');
      return tokens.reverse().join(' - ');
    },

    beforeModel() {
      moment.locale('uk');
    }
  }
);
