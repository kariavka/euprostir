'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'euprostir',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    api: {
      host: 'https://www.livarava.com',
      path: '/api/v2',
      key: '2359a4d8-d8e5-45a7-8878-d9f8eb9637b4'
    },

    i18n: {
      defaultLocale: 'uk',
      allowedLocales: ['uk']
    },

    neuronet: {
      site: 131961,
      stories: 131968,
      practices: 131972,
      opportunities: 131974,
      courses: 131968,
      events: 131968,
      about: 132034,
    },

    pageTitle: {
      replace: true
    },

    googleAnalytics: {
      webPropertyId: '',
    },

    'ember-cli-head': {
      suppressBrowserRender: true
    },

    moment: {
      includeLocales: true
    },
  };

  if (environment === 'local') {
    ENV.api = {
      host: 'http://local.livarava.com',
      path: '/api/v2',
      key: ''
    };

    ENV.neuronet = {
      site: 4964,
      uk: {}
    };
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
