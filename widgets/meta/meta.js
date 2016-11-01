/*
 *  Project: Meta Tags jQuery plugin
 *  Author: Jan Gabriel <jan.gabriel@foxon.cz>
 *  License: MIT
 */

(function($, window, document, undefined) {

	var pluginName = "meta",
		dataKey = "plugin_" + pluginName;

	var Plugin = function() {
		this.init();
	};

	Plugin.prototype = {
		init: function() {
			this.meta = $('meta');
		},
		tags: function(name, content) {
			if (typeof(name) != "undefined") {
				if (typeof(content) != "undefined") {
					if (this.meta.filter('[name=' + name + ']').length) {
						return this.meta.filter('[name=' + name + ']').attr('content', content);
					} else {
						return $('head').append('<meta name="' + name + '" content="' + content + '" />');
					}
				} else {
					return this.meta.filter('[name=' + name + ']');
				}
			} else {
				return this.meta;
			}
		}
	};

	/*
	 * Plugin wrapper, preventing against multiple instantiations and
	 * return plugin instance.
	 */
	$.fn[pluginName] = function(options) {

		var plugin = this.data(dataKey);

		// has plugin instantiated ?
		if (plugin instanceof Plugin) {
			// if have options arguments, call plugin.init() again
			if (typeof options !== 'undefined') {
				plugin.init(options);
			}
		} else {
			plugin = new Plugin(this, options);
			this.data(dataKey, plugin);
		}

		return plugin;
	};

}(jQuery, window, document));