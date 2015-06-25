import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'journaling-app/tests/helpers/start-app';

var application;

module('Acceptance | entries new ui', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('make sure /entries/new ui is all there', function(assert) {
  visit('/entries/new');

  andThen(function() {
    assert.equal(find('textarea').length, 1);
    assert.equal(find('input[type="text"]').length, 1);
    assert.equal(find('button').length, 1);
  });
});
