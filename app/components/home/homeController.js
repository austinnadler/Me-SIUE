app.controller("homeController", function($scope, $route, $location, $routeParams) {

    $scope.bio = [
        "I am a senior at Southern Illinois University Edwardsville studying Computer Management & Information Systems with a minor in Computer Science. I am currently working for Ameren in an IT Service Management Co-op, and previously worked for True Manufacturing in a Developer Co-op.",
        "I currently work in ServiceNow at Ameren. I do a lot of Performance Analytics and Reporting, and am currently working on a project to redesign Ameren's ServiceNow Self-Service Portal. This work got me interested in ServiceNow development in general, so I studied to be certified as a ServiceNow System Administrator (CSA). I now work on two teams at Ameren: The ITSM team, and the ServiceNow Platform team."
    ];

    $scope.amerenExperience = "I am currently working at Ameren Services as an IT Service Management Co-op. Ameren is a Saint Louis based power company that serves over 2.5 million electric and gas customers across Illinois and Missouri. My responsibilities at Ameren range from ServiceNow Performance Analytics and Reporting to ServiceNow development.";
    
    $scope.trueExperience = "Previously, I worked as a Co-op Software Developer at True Manufacturing in O'Fallon Missouri. True is the leading manufacturer of commercial refrigeration units in the United States. At True I worked in an Agile environment developing dashboard applications for internal use on the Epicor ERP with C# and SQL.";
});