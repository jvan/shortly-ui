import DS from 'ember-data';

export default DS.Model.extend({
  url: DS.attr('string'),
  key: DS.attr('string'),
  last_click: DS.attr('date'),

  shortUrl: function() {
    return `http://short.ly/go/${this.get('key')}`;
  }.property('key'),

  shortHref: function() {
    return `http://localhost:1323/go/${this.get('key')}`;
  }.property('key'),

  identiconUrl: function() {
    return `http://sigil.cupcake.io/${this.get('key')}`
  }.property('key')
});
