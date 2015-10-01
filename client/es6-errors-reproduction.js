// Subclassing a class created in the same file works just fine.
class Local {
  constructor() {
    console.log("Local");
  }
}

class LocalSubclass extends Local {
  constructor() {
    super();
    console.log("Local subclass");
  }
}

// This works.
const ls = new LocalSubclass();

// Also, importing a class from a package works, either by assigning a class as a
// member variable of a global object (the Meteor object, in this case), or by
// 

// The base classes defined in the package are in scope and we can instantiate them just fine.
const a = new Meteor.A({"arg": "for super"});
const b = new B({"another arg": "for super"});

// However, when we try to instantiate a subclass of a class defined in a package,
// it throws an error. Here are a few examples of this behavior:

// Let's try instantiating classes defined in a different file in this application.
// These two lines would both throw "TypeError: Class constructors cannot be invoked without 'new'".
const c = new C();
// const d = new D();  // This throws an error too.

// Now let's try defining a subclass right here, with B (one of the classes defined in the package)
// as the superclass. It still doesn't work.
class E extends B {
  constructor() {
    console.log("E");
    super({"super": "duper"});
  }
}

// This line also throws the same error.
// const e = new E();

