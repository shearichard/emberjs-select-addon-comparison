import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  nationality: DS.attr('string')
});
