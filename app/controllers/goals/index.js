import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveNewGoal(goalTitle) {
      if(!goalTitle) {
        return;
      }

      let goal = this.store.createRecord('goal', {
        title: goalTitle,
        timeSpent: 0
      });

      goal.save();
    },
    deleteGoal(id) {
      console.log('deleting ', id);
        this.store.findRecord('goal', id).then(function(goal){
          goal.destroyRecord();
        });
    }
  }
});
