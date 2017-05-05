import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addGoal() {
      this.sendAction('addGoal', this.get('newGoal'));
      this.set('newGoal', '');
    },
    editTitle() {
      console.log('clicked title');
    },
    deleteGoal(goal) {
      this.sendAction('deleteGoal', goal.get('id'));
      console.log('deleted title:', goal);
    }
  }
});
