import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
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
  this.route('about-euprostir');
  this.route('about-together');
});

export default Router;
