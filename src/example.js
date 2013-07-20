goog.provide('example.Trivial');

goog.require('example.dependency.Fooer');
goog.require('goog.math');

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
  return goog.math.sum(this.dep.get());
};



}); //scope ends

//script entry point:
var myTrivial = new example.Trivial("what ");

document.write(myTrivial.doThang());

