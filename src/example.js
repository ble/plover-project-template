goog.provide('example.Trivial');

goog.require('example.dependency.Fooer');

goog.scope(function() { //scope begins

var _ = example;
var _d = _.dependency;

/**
 * @constructor
 */
_.Trivial = function(msg) {
  this.msg = msg;
  this.dep = new _d.Fooer();
}

_.Trivial.prototype.doThang = function() {
  return this.msg + this.dep.get();
}

_.Trivial.prototype.causeWarning = function() {
  return Math.abs(this.dep.get());
};

}); //scope ends
