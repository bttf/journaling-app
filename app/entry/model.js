import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  dateCreated: attr('date', { defaultValue: function() { return new Date(); } }),
  dateUpdated: attr('date'),
  body: attr('string'),
  tags: attr('string')
});
