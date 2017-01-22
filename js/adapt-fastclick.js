define(function() {
  require(["libraries/fastclick.min.js"], function(FastClick) {
    $(function() {
      FastClick.attach(document.body);
    });
  });
});
