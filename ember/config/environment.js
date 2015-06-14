/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'realtime',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      PUSHER_OPTS: {
        key: '',
        connection: {},
        logAllEvents: false
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV['contentSecurityPolicy'] = {
    'default-src': "'none'",
    'font-src': "'self' http://maxcdn.bootstrapcdn.com/",
    'script-src': "'self' http://stats.pusher.com/",
    'connect-src': "'self' ws://ws.pusherapp.com/", 
    'img-src': "'self'",
    'style-src': "'self' 'unsafe-inline' http://maxcdn.bootstrapcdn.com/",
    'media-src': "'self'",
  };

  return ENV;
};
