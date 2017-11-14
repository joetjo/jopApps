var module2 = (
  function() {
    // Private member
    function doSomethingInternal(message) {
      logging.warn("Simple fake warning message from module 2")
      return 'internal ' + message;
    }

    // Public member
    return {
      "about" : function() {
        return "{ name: 'module2', version : '0.1', desc : 'simple module with dependency', depends : {" +
              module1.about() + "," + logging.about()
              + "} }";
      },
      "testModule2" : function() {
        return doSomethingInternal("hello from module 2");
      }
    };
  }
)();
