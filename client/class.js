// Let's define a couple of subclasses of the classes defined in the package.
// Try a couple of permutations of the definitions (neither of these work).
C = class extends Meteor.A {
  constructor() {
    super({'ermahgerd': 'erkmahskerpt'});
  }
}

class _D extends B {
  constructor() {
    console.log("D");
    super({'ermahgerd': 'erkmahskerpt'});
  }
}

D = _D;
