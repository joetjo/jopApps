var module1 = (
  function() {
    // Private member
    function doSomethingInternal(message) {
      logging.info("Simple info message from module 1")
      return 'internal ' + message;
    }

    // Public member
    return {
      "about" : function() {
        return "{ name: 'module1', version : '0.1', desc : 'simple leaf module', depends : {" +
              logging.about()
              + "} }";
      },
      "testModule1" : function() {
        return doSomethingInternal("hello from module 1");
      }
    };
  }
)();
