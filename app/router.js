import EmberRouter from '@ember/routing/router';
import RouterScroll from 'ember-router-scroll';
import {get} from '@ember/object';
import {inject as service} from '@ember/service';
import {scheduleOnce} from '@ember/runloop';
import config from './config/environment';

const Router = EmberRouter.extend(RouterScroll, {
  location: config.locationType,
  rootURL: config.rootURL,
  metrics: service(),

  didTransition() {
    this._super(...arguments);
    this._trackPage();
  },

  _trackPage() {
    scheduleOnce('afterRender', this, () => {
      const page = this.get('url');
      const title = this.getWithDefault('currentRouteName', 'unknown');

      get(this, 'metrics').trackPage({page, title});
    });
  }
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
    this.route('lecture', function () {
      this.route('item', {path: '/:id'});
    });
  });

  this.route('events', function () {
    this.route('item', {path: '/:id'});
  });

  this.route('resources', function () {
    this.route('item', {path: '/:id'});
  });

  this.route('page', {path: '/:uid/'});

  this.route('en', function () {
    this.route('stories', function () {
      this.route('item', {path: '/:id'});
    });
    this.route('tips', function () {
      this.route('item', {path: '/:id'});
    });
    this.route('page', {path: '/:uid/'});
    this.route('notfound');
  });

  this.route('news', function() {
    this.route('item', {path: '/:id'});
  });

  this.route('war');
  
  this.route('notfound');
});

export default Router;
