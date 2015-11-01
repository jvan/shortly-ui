import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    generate: function() {
      var url = this.get('url');

      console.log(`generating short url for ${url}...`);

      var linkData = {
        url:     this.get('url'),
        user_id: this.get('user.id')
      }

      console.log(linkData);

      Ember.$.ajax({
        url: 'http://localhost:1323/links',
        type: 'POST',
        data: JSON.stringify(linkData),
        dataType: 'json',
        headers: {
          'content-type': 'application/json'
        }, 

        success: (response) => {
          var store = this.get('user.store');
          var link = store.createRecord('link', {
            url: response.link.url,
            key: response.link.key
          });
          this.get('user.links').pushObject(link);
          this.set('url', '');
        },

        error: (err) => {
          this.set('errorMessage', 'something went wrong');
        }
      });
    }

  }
});
