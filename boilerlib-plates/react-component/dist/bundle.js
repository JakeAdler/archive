import React, { useState } from 'react';

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var CountButton$1 = CountButton = function CountButton(_ref) {
  var setCount = _ref.setCount;

  var handleClick = function handleClick() {
    return setCount(count++);
  };

  return React.createElement(React.Fragment, null, React.createElement("button", {
    onClick: handleClick,
    setCount: setCount
  }, "+ 1"));
};

var CountDisplay$1 = CountDisplay = function CountDisplay(_ref) {
  var count = _ref.count;
  return React.createElement("h2", {
    style: {
      color: 'bue'
    }
  }, count);
};

Count = function Count() {
  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  return React.createElement(React.Fragment, null, React.createElement(CountButton$1, {
    setCount: setCount
  }), React.createElement(CountDisplay$1, {
    count: count
  }));
};
