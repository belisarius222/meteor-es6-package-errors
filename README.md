# meteor-es6-package-errors
In Meteor 1.2, subclassing a class defined in a package throws an error.

Here we define classes A and B in package "class-a", then try to subclass them in the app.
The file client/class.js defines subclasses C and D of A and B, respectively.
The classes are instantiated in the file client/es6-errors-reproduction.js.

I tried a few different ways of doing this, but all of them throw this error:
TypeError: Class constructors cannot be invoked without 'new'.

Note that this is not the error that gets thrown if you forget to put 'new' in front of a constructor call.
That tends to throw:
TypeError: Cannot call class as a function.

To see the errors, run this app and open the JavaScript console.
