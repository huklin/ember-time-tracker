import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateTimeSpent(seconds) {
      let totalTime = this.get('model.timeSpent');
      totalTime += seconds;
      this.set('model.timeSpent', totalTime);
      this.get('model').save();
    }
  }
});
