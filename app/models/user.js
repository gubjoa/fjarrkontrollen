import DS from 'ember-data';

export default DS.Model.extend({
  xkonto: DS.attr('string'),
  name: DS.attr('string'),
  managingGroupId: DS.attr('string'),
  pickupLocationId: DS.attr('string')
});
