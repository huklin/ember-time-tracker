import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addGoal(goalTitle) {

      if(!goalTitle) {
        return;
      }

      let goal = this.store.createRecord('goal', {
        title: goalTitle,
        timeSpent: 0
      });

      goal.save();
      this.set('newGoal', '');
    },
    deleteGoal(id) {
        this.store.findRecord('goal', id).then(function(goal){
          goal.destroyRecord();
        });
    },
    editTitle(id) {
    }
  }
});
