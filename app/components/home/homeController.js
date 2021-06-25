app.controller("homeController", function($scope) {

    $scope.setNavbar = function() {
        $("#navHome").addClass("active");
        $("#navProjects").removeClass("active");
    }

    $scope.jobTitle = "ServiceNow Developer Analyst at Accenture Federal Services"

    $scope.bio = [
        "I am a senior at Southern Illinois University Edwardsville studying Computer Management & Information Systems with a minor in Computer Science.",
        "I am currently working in consulting at Accenture Federal Services as a ServiceNow Developer Analyst."
    ];

    $scope.accentureExperience = "I have been working for Accenture Federal Services as a ServiceNow Developer Analyst since the end of June 2021. AFS is a consulting firm that works with US Government clients.";

    $scope.amerenExperience = "I was a co-op at Ameren Services from May 2020 to the end of June 2021. I worked as an IT Service Management Co-op doing Performance Analytics, Reporting, and Service Portal development work. Ameren is a Saint Louis based power company that serves over 2.5 million electric and gas customers across Illinois and Missouri. My responsibilities at Ameren range from ServiceNow Performance Analytics and Reporting to ServiceNow development.";
    
    $scope.trueExperience = "Previously, I worked as a Co-op Software Developer at True Manufacturing in O'Fallon Missouri. True is the leading manufacturer of commercial refrigeration units in the United States. At True I worked in an Agile environment developing dashboard applications for internal use on the Epicor ERP with C# and SQL.";
});