import Ember from 'ember';

export function elapsedTime(params/*, hash*/) {
  var time = params[0];
  return moment().to(time);
}

export default Ember.Helper.helper(elapsedTime);
