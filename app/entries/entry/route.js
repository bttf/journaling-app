import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('entry', params.id);
  },

  setupController: function(controller, model) {
    controller.set('entry', model);
  }
});
