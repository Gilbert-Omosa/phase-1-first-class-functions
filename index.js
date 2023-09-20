function receivesAFunction(callBackFunction) {

    callBackFunction();
  }

function returnsANamedFunction() {
    
    function mynamedFunction() {

    }

return mynamedFunction;

  }

function returnsAnAnonymousFunction() {

    return function() {
    
    };
  }