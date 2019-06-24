import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('guest', function() {
    this.route('new');
    this.route('new-using-ember-power-select');
  });
});

export default Router;
