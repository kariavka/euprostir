import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('stories', function () {
    this.route('item', {path: '/:id'});
  });
  this.route('practices', function () {
    this.route('item', {path: '/:id'});
  });
  this.route('opportunities', function () {
    this.route('item', {path: '/:id'});
  });
  this.route('page', {path: '/:uid/'});
  this.route('notfound');
  this.route('about');
});

export default Router;
