export class DataSync {
  bindModel(obj, property, elView, fnCallback) {
      Object.defineProperty(obj, property, {
        get: function() {
         return elView.value;
       }, 
       set: function(newValue) { 
        elView.value = newValue;
        fnCallback(newValue);
      },
      configurable: true
    });
  }
}
