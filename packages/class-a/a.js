"use strict";

// Use a named class and assign it as a member of a global object.
class A {
  constructor(options) {
    console.log('A', options);
  }
}

Meteor.A = A;

// Assign an anonymous class to a global variable, which we then export in the package.js
B = class {
  constructor(options) {
    console.log('B', options);
  }
};
