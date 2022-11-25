const {config} = angular.module("App" ["ngRoute"]);

config(($routeProvider) => {
  $routeProvider
    .when("/", {templateUrl: "./app/app.component.html"})
    .otherwise({redirectTo: "/"})
});
