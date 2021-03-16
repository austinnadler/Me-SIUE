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
    .when("/extras", {
       templateUrl: "app/components/extras/extrasView.html",
       controller: "extrasController"
    })
    .otherwise({
        redirectTo: "/home"
    });
}]);