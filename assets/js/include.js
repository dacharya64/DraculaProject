$(function(){
  var includes = $('[data-include]');
  jQuery.each(includes, function(){
    var file = 'snippets/' + $(this).data('include') + '.html';
    $(this).load(file);
  });
});
