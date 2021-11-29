app.controller("homeController", function($scope) {

    $("#navHome").addClass("active");
    $("#navProjects").removeClass("active");
    $("#navExtras").removeClass("active");
   
    $scope.jobTitle = "ServiceNow Developer/Automation Engineer at Edward Jones";

    $scope.bio = [
        "SIUE December 2021 Cum Laude graduate with a B.S. in Computer Management & Information Systems and a Computer Science minor." 
    ]

    $scope.links = [
        {
            title: "LinkedIn",
            url: "https://www.linkedin.com/in/austin-nadler-a011b41a7/",
            icon: "linkedin"
        },
        // {
        //     title: "Resume",
        //     url: "assets/files/AustinNadlerResume.pdf",
        //     icon: "file"
        // },
        {
            title: "GitHub",
            url: "https://github.com/austinnadler",
            icon: "github"
        }
    ];

    $scope.snCertifications = [
        "Certified System Adminstrator",
        "Certified Implementation Specialist - IT Service Management",
        "Certified Implementation Specialist - Application Portfolio Management"        
    ];

    $scope.genCertifications = [
        "ICAgile Certified Professional",
        "Testout PC Pro",
        "Testout Network Pro"
    ]

    // $scope.skills = [
    //     "JavaScript",
    //     "React",
    //     "AngularJS",
    //     "Angular",
    //     "jQuery",
    //     "HTML/CSS",
    //     "SQL (MySQL, Microsoft SQL Server, Oracle)",
    //     "Java, JavaFX",
    //     "C#",
    //     "C++",
    //     "PHP"
    // ];

    $scope.companies = [
        {
            url: "https://www.edwardjones.com/",
            image: "ej_logo.png",
            description: "Edward Jones is a St. Louis based investment firm. As a ServiceNow Developer/Automation Engineer, I perform standard ServiceNow development activites and also work to automate business processes with external tools like Python."
        },
        {
            url: "https://www.accenture.com",
            image: "accenture_logo.png",
            description: "AFS is a consulting firm that works with US Government clients. As s ServiceNow Developer, I worked on an Agile team to develop solutions for enhancements and defects in a government clients ServiceNow environment."
        },
        {
            url: "https://www.ameren.com/",
            image: "ameren_logo.png",
            description:"Ameren is a St. Louis based power company that serves over 2.5 million electric and gas customers across Illinois and Missouri. As a Digital ITSM Co-op, my responsibilities at Ameren ranged from ServiceNow Performance Analytics and Reporting to ServiceNow portal development."
        },
        {
            url: "https://www.truemfg.com",
            image: "truemfg_logo.png",
            description: "True is the leading manufacturer of commercial refrigeration units in the United States. As a Developer Co-op I worked in an Agile environment developing dashboard applications for internal use on the Epicor ERP with C# and SQL."
        }
    ];

});