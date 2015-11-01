import Ember from 'ember';

export function elapsedTime(params/*, hash*/) {
  var time = params[0];
  if (moment(time).year() < 2015) {
    return 'never clicked';
  }
  return `last clicked ${moment().to(time)}`;
}

export default Ember.Helper.helper(elapsedTime);
