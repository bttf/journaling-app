import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      entries: this.store.find('entry')
    });
  },

  setupController: function(controller, model) {
    controller.setProperties(model);
  }
});
