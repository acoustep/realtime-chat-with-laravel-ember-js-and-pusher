import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('messages', {path: '/'}, function() {});
  this.resource('message', function() {});
});

export default Router;
