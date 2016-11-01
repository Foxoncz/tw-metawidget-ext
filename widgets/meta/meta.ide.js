TW.IDE.Widgets.meta = function () {
	this.widgetIconUrl = function() {
		return  "'../Common/extensions/MetaWidget/ui/meta/meta.png'";
	};

	this.widgetProperties = function () {
		return {
			'name': 'Meta',
			'description': 'Simple meta widget.',
			'category': ['Common'],
			'properties': {
				'Viewport Initial Scale': {
					'baseType': 'NUMBER',
					'defaultValue': 1.0,
					'isBindingTarget': true
				},
				'Width': {
                    'description': 'Widget width',
                    'defaultValue': 150
                },
                'Height': {
                    'description': 'Widget height',
                    'defaultValue': 20
                }

			}
		}
	};

	this.afterSetProperty = function (name, value) {
		var refreshHtml = false;
		return refreshHtml;
	};

	this.renderHtml = function () {
		// return any HTML you want rendered for your widget
		// If you want it to change depending on properties that the user
		// has set, you can use this.getProperty(propertyName).
		// return any HTML you want rendered for your widget
		var html = '<div class="widget-content widget-meta">' +
						'<div class="meta-wrapper">' +
							'<p>Meta: Invisible at Runtime.</p>' + 
						'</div>' +
					'</div>';
				
		return html;
	};

	this.afterRender = function () {
	};
};