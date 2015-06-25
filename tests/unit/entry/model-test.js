import { moduleForModel, test } from 'ember-qunit';

moduleForModel('entry', 'Unit | Model | entry', {
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  assert.ok(!!model);
});

test('default value for dateCreated is now', function(assert) {
  var model = this.subject();
  var now = new Date();

  assert.ok(model.get('dateCreated'));
  assert.equal(model.get('dateCreated').toDateString(), now.toDateString());
});
