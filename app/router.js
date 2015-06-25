import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('entries', function() {
    this.route('new');
    this.route('entry', { path: '/:id' });
  });
});

export default Router;
