define(function() {
  return {
    setStyle: function(id, href) {
      var style = document.querySelectorAll("#" + id)[0];
      style.href = href;
    }
  }
});
