app.controller("homeController", function($scope, $route, $location, $routeParams) {
    $scope.bio = "I am a senior at Southern Illinois University Edwardsville studying Computer Management & Information Systems with a minor in Computer Science. I am currently working for Ameren in an IT Service Management Co-op, and previously work for True Manufacturing in a Developer Co-op.";

    $scope.amerenExperience = "I am currently working at Ameren Services as an IT Service Management Co-op. Ameren is a Saint Louis based power company that serves over 2.5 million electric and gas customers across Illinois and Missouri. My responsibilities at Ameren range from ServiceNow Performance Analytics and Reporting to front-end web development.";
    
    $scope.trueExperience = "Previously, I worked as a Co-op Software Developer at True Manufacturing in O'Fallon Missouri. True is the leading manufacturer of commercial refrigeration units in the United States. At True I worked in an Agile environment developing dashboard applications for internal use on the Epicor ERP with C# and SQL.";
});