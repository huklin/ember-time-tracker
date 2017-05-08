import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  timeSpent: DS.attr('number', { defaultValue: 0})
});
