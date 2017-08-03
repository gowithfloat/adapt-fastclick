define(function() {
  require(["libraries/fastclick.min.js"], function(FastClick) {
    $(function() {
      var _needsClick = FastClick.prototype.needsClick;
      FastClick.prototype.needsClick = function(target) {
        return _needsClick(target) || /select2/.test(target.className);
      };
      FastClick.attach(document.body);
    });
  });
});
