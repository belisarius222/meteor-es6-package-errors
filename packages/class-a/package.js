Package.describe({
  name: "class-a",
  summary: "an abstract class",
  version: "0.0.0"
});

Package.onUse(function(api) {
  api.addFiles("a.js", "client");
  api.export("B", "client");
});
