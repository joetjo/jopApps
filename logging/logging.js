var logging = (
  function() {
    // Public member
    return {
      "about" : function() {
        return "{ name: 'logging', version : '0.1', desc : 'simple logger' }";
      },
      "debug" : function(message) {
        console.debug("[DEBUG] " + message);
      },
      "info" : function(message) {
        console.info("[INFO ] " + message);
      },
      "warn" : function(message) {
        console.warn("[WARN ] " + message);
      },
      "error" : function(message) {
        console.error("[ERROR] " + message);
      }
    };
  }
)();
