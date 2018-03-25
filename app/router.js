import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('about');
  this.route('stories', function () {
    this.route('item', {path: '/:id'});
  });
  this.route('practicies', function () {
    this.route('item', {path: '/:id'});
  });
  this.route('opportunities', function () {
    this.route('item', {path: '/:id'});
  });
});

export default Router;
