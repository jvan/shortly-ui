import Ember from 'ember';

export default Ember.Component.extend({
  errors: {},

  isEmailAddress: function() {
    var username = this.get('username');
    if (username === undefined) {
      return false;
    }
    return (this.get('username').indexOf('@') !== -1);
  }.property('username'),

  validateForm: function() {
    Ember.Logger.debug('validating login form');

    this.set('errors', {});

    var { username, password } = this.getProperties('username', 'password');

    if (username === undefined || username === '') {
      this.set('errors.username', 'You must enter a username');
    }

    if (password === undefined || password === '') {
      this.set('errors.password', 'You must enter a password');
    }

    return Object.keys(this.get('errors')).length === 0;
  },

  actions: {
    login: function() { 
      if (!this.validateForm()) {
        return;
      }

      var user = {
        username: this.get('username'),
        password: this.get('password')
      }

      Ember.$.ajax({
        url:  'http://localhost:1323/login',
        type: 'POST',
        data: JSON.stringify(user),
        contentType: 'application/json',

        success: (response) => {
          this.sendAction('onSuccess', response.user);
        },

        error: (error) => {
          this.set('errors.login', 'Invalid username or password');
        }
      });

    },

    register: function() {
      if (!this.validateForm()) {
        return;
      } 
      var user = {
        username: this.get('username'),
        password: this.get('password')
      }

      /*
      Ember.$.ajax({
        url:  'http://localhost:1323/register',
        type: 'POST',
        data: JSON.stringify(user),
        contentType: 'application/json',

        success: (response) => {
          this.sendAction('onSuccess', response.user);
        },

        error: (error) => {
          this.set('errors.login', error.responseJSON.error);
        }
      });
      */ 
    }
  }
});
