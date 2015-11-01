import Ember from 'ember';

export default Ember.Controller.extend({
  loginController: Ember.inject.controller('login'),

  actions: {
    logout: function() {
      Ember.Logger.debug('logging out');
      this.get('loginController').send('logout');
    }
  }
});
