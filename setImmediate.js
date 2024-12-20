// setImmediate.js
if (typeof setImmediate === 'undefined') {
    global.setImmediate = (callback, ...args) => {
      return setTimeout(callback, 0, ...args);
    };
  }
  