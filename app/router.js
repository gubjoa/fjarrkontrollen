import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('admin', { path: '' }, function() {
    this.route('post', { path: 'post/:id'});
    this.route('postscanned', { path: 'postscanned/:id' });
  });
});

export default Router;
