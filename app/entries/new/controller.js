import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveEntry: function(entry) {
      var self = this;
      entry.save().then(function() {
        self.set('saved', 'Saved.');
      });
    }
  }
});
