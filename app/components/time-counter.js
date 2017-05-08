import Ember from 'ember';

export default Ember.Component.extend({
  isRunning: false,
  startTime: 0,
  currentTime: 0,
  timerId: 0,
  milliseconds: Ember.computed('startTime', 'currentTime', function(){
    return this.get('currentTime') - this.get('startTime');
  }),
  increaseTime() {
    this.set( 'currentTime', Date.now() );
  },
  actions: {
    startCount() {
      clearInterval(this.get('timerId'));

      this.set( 'startTime', Date.now() - this.get('milliseconds') );
      this.set( 'currentTime', Date.now() );

      this.set( 'timerId', setInterval(this.get('increaseTime').bind(this), 100) );
      this.set('isRunning', true);
    },
    restartCount() {
      clearInterval(this.get('timerId'));

      this.set( 'startTime', Date.now() );
      this.set( 'currentTime', this.get('startTime'));

      this.set('isRunning', false);
    },
    pauseCount() {
      clearInterval(this.get('timerId'));
      this.set('isRunning', false);
    }
  }
});
