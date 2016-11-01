TW.Runtime.Widgets.meta = function () {
	this.renderHtml = function () {
		// return any HTML you want rendered for your widget
		// If you want it to change depending on properties that the user
		// has set, you can use this.getProperty(propertyName).
		// return any HTML you want rendered for your widget
		var script = '<script src="../Common/extensions/MetaWidget/ui/meta/meta.js" type="text/javascript"></script>';
		var html = '<div class="widget-content widget-meta">' +
						'<div class="meta-wrapper">' +
							'<p>Meta: Invisible at Runtime.</p>' + 
						'</div>' +
					'</div>';
				
		if (jQuery().meta){
			return html;
		}
		else {
			return script + html;
		}
	};

	this.afterRender = function () {
		this.meta = $().meta();
		this.meta.tags('viewport', 'width=device-width, initial-scale=' + this.getProperty('Viewport Initial Scale'));
	};

	// this is called on your widget anytime bound data changes
	this.updateProperty = function (updatePropertyInfo) {
		// TargetProperty tells you which of your bound properties changed
		if (updatePropertyInfo.TargetProperty === 'Viewport Initial Scale') {
			var value = updatePropertyInfo.SinglePropertyValue;
			this.meta.tags('viewport', 'width=device-width, initial-scale=' + this.getProperty('Viewport Initial Scale'));
			this.setProperty(updatePropertyInfo.TargetProperty, value);
		}
	};
};