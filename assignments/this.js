/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window binding: 'this' targets the entire global scope of JS.
 * 2. Implicit binding: 'this' targets the object that is calling it.
 * 3. New binding: 'this' targets an object that was created using the 'new' keyword and a constructor.
 * 4. Explicit binding: The target of 'this' is overwritten by an explicit '.call' or '.apply'
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function windowBind() {
  console.log("Window Binding");
  return this;
}

windowBind();

// Principle 2

// code example for Implicit Binding
const implicitBind = {
  name: "Implicit Binding",
  displayName: function(name) {
    console.log(this.name);
  }
};

implicitBind.displayName();

// Principle 3

// code example for New Binding
function Constructor(name) {
  this.name = name;
  this.displayName = function() {
    console.log(this.name);
  };
}

const newObject = new Constructor("New Binding");
newObject.displayName();

// Principle 4

// code example for Explicit Binding
// @@@@@ Using constructor from above
const explicitObject = new Constructor("Explicit Binding");
explicitObject.displayName.call(newObject);
