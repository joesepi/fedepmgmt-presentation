;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var robot = require('./robot');

module.exports = function () {
    robot('beep');
};

},{"./robot":4}],2:[function(require,module,exports){
var robot = require('./robot');

module.exports = function () {
    robot('boop');
};

},{"./robot":4}],3:[function(require,module,exports){
var beep = require('./beep');
var boop = require('./boop');

beep();
boop();

},{"./beep":1,"./boop":2}],4:[function(require,module,exports){
module.exports = function (s) {
    return console.log(s.toUpperCase() + '!');
};

},{}]},{},[3])
;