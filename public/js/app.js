App = Ember.Application.create({
  rootElement: "#app"
});

App.Router.reopen({
  location: 'history'
});

App.Router.map(function() {
  this.resource("about");
  this.resource("contact");
  this.resource("portfolio");
  this.resource("blog");
});

// App.Router.map(function () {
//   this.resource("about");
//   this.resource("posts", function () {
//     this.resource("post", { path: ":post_id"});
//   });
//   this.resource("play");
// });

App.AboutRoute = Ember.Route.extend({
  model: function() {
  }
});
