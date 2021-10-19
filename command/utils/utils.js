function when(flag) {
  function handler() {}
  handler.then = function (fn) {
    if (flag) {
      fn();
    }
    return handler;
  };
  handler.otherwise = function (fn) {
    if (!flag) {
      fn();
    }
    return handler;
  };
  return handler;
}

module.exports = when;
