import Route from '@ember/routing/route';
import ResetScrollMixin from 'ember-cli-reset-scroll';
import LoadingSliderMixin from '../mixins/loading-slider';

export default Route.extend(
  LoadingSliderMixin,
  ResetScrollMixin,
  {
    title: function (tokens) {
      tokens = Ember.makeArray(tokens);
      tokens.unshift('Євпропейський простір');
      return tokens.reverse().join(' - ');
    },
  }
);
