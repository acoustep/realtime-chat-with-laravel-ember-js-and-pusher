import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  messageContent: DS.attr('string'),
  createdAt: DS.attr('string'),
  updatedAt: DS.attr('string')
});
