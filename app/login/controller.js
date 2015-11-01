import Ember from 'ember';

function syncSessionStorage(key, data) {
  if (data === null || data === 'null') {
    delete sessionStorage[key];
  } else {
    sessionStorage.setItem(key, data);
  }
}

export default Ember.Controller.extend({
  user:  JSON.parse(sessionStorage.getItem('user')),
  token: sessionStorage.getItem('token'),

  updateSessionStorage: function() {
    syncSessionStorage('user', JSON.stringify(this.get('user')))
    syncSessionStorage('token', this.get('token'))
  }.observes('user', 'token'),

  isLoggedIn: function() {
    return this.get('token') !== null;
  }.property('token'),

  actions: {
    loginSuccess: function(user) {
      this.set('token', 'foo');
      this.set('user', user);
      this.transitionToRoute('user', user.id);
    },

    logout: function() {
      this.set('token', null);
      this.set('user', null);
      this.transitionToRoute('login');
    }
  }
});
