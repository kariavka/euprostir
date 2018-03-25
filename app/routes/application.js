import Route from '@ember/routing/route';
import ResetScrollMixin from 'ember-cli-reset-scroll';
import LoadingSliderMixin from '../mixins/loading-slider';

export default Route.extend(
  LoadingSliderMixin,
  ResetScrollMixin,
  {}
);
