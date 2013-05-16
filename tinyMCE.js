(function() {
  requirejs.config({
    shim: {
      tinyMCE_source: {
        exports: 'tinyMCE',
        init: function() {
          this.tinyMCE.DOM.events.domLoaded = true;
          return this.tinyMCE;
        }
      }
    }
  });

  define(['tinyMCE_source'], function(tinyMCE) {
    return tinyMCE;
  });
}).call(this);