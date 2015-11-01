import DS from 'ember-data';

export default DS.Model.extend({
  name:  DS.attr('string'),
	links: DS.hasMany('link', {async: true}),

	linkCount: function() {
		return this.get('links.length');
	}.property('links.[]')
});
