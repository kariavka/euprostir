import EmberRouter from '@ember/routing/router';
import RouterScroll from 'ember-router-scroll';
import config from './config/environment';

const Router = EmberRouter.extend(RouterScroll, {
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

  this.route('courses', function () {
    this.route('item', {path: '/:id'});
  });

  this.route('events', function () {
    this.route('item', {path: '/:id'});
  });

  this.route('resources', function () {
    this.route('item', {path: '/:id'});
  });

  this.route('page', {path: '/:uid/'});

  this.route('notfound');

  this.route('about');

  this.route('about-euprostir');

  this.route('about-together');
});

export default Router;
