TW.IDE.Widgets.meta=function(){this.widgetIconUrl=function(){return"'../Common/extensions/MetaWidget/ui/meta/meta.png'"},this.widgetProperties=function(){return{name:"Meta",description:"Simple meta widget.",category:["Common"],properties:{"Viewport Initial Scale":{baseType:"NUMBER",defaultValue:1,isBindingTarget:!0},Width:{description:"Widget width",defaultValue:150},Height:{description:"Widget height",defaultValue:20}}}},this.afterSetProperty=function(e,t){var i=!1;return i},this.renderHtml=function(){var e='<div class="widget-content widget-meta"><div class="meta-wrapper"><p>Meta: Invisible at Runtime.</p></div></div>';return e},this.afterRender=function(){}};