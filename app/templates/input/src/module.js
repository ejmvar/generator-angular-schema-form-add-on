angular.module('<%= directive %>', [
  'schemaForm',
  'templates'
]).config(function(schemaFormDecoratorsProvider, sfBuilderProvider) {

  schemaFormDecoratorsProvider.defineAddOn(
    'bootstrapDecorator',           // Name of the decorator you want to add to.
    '<%= typeName %>',                      // Form type that should render this add-on
    'src/templates/<%= paramName %>.html',  // Template name in $templateCache
    sfBuilderProvider.stdBuilders   // List of builder functions to apply.
  );

});
