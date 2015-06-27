import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteEntry: function(entry) {
      entry.destroyRecord();
    }
  }
});
