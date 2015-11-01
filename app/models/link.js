import DS from 'ember-data';

export default DS.Model.extend({
  url: DS.attr('string'),
  key: DS.attr('string'),

  shortUrl: function() {
    return `http://short.ly/go/${this.get('key')}`;
  }.property('key'),

  shortHref: function() {
    return `http://localhost:1323/go/${this.get('key')}`;
  }.property('key')

});
