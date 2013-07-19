goog.provide("example.dependency.Fooer");

/**
 * @constructor
 */
example.dependency.Fooer = function() {
  this.message = "Foo!";
}

example.dependency.Fooer.prototype.get = function() {
  return this.message;
}

