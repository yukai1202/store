define([
	'jquery',
	'underscore',
	'backbone'
], function( $, _, Backbone) {

	var AppView = Backbone.View.extend({
	    el: '#todoapp',

		template: _.template("<h1><%= who¡¡%> hello world</h1>"),

		events: {
			
		},

		initialize: function() {
		    this.render();
		},

		// Re-rendering the App just means refreshing the statistics -- the rest
		// of the app doesn't change.
		render: function () {
		    this.$el.html(this.template({ who: 'world!' }));
		}
		
	});

	return AppView;
});
