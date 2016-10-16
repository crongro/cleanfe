class DataSync {
  bindModelInput(obj, property, elView, fnCallback) {
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

export default DataSync;