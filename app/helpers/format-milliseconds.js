import Ember from 'ember';

export function formatMilliseconds(ms) {
  const s = Math.floor (ms/1000);
  const hour = Math.floor (s/3600);
  const min = Math.floor((s % 3600) / 60);
  const sec = s % 60;

  return padNumber(hour) + ':' + padNumber(min) + ':' + padNumber(sec);
}

function padNumber(num) {
  if (num < 10) {
    return `0${num}`;
  }
  return String(num);
}

export default Ember.Helper.helper(formatMilliseconds);
