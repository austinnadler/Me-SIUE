app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl: "app/components/home/homeView.html",
        controller: "homeController"
    })
    .when("/projects", {
        templateUrl: "app/components/projects/projectsView.html",
        controller: "projectsController"
    })
    .otherwise({
        redirectTo: "/home"
    });
}]);