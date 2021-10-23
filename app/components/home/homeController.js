app.controller("homeController", function($scope) {

    $("#navHome").addClass("active");
    $("#navProjects").removeClass("active");
    $("#navExtras").removeClass("active");
   
    $scope.jobTitle = "ServiceNow Developer at Accenture Federal Services";

    $scope.bio = [
        "I am a senior at Southern Illinois University Edwardsville studying Computer Management & Information Systems with a minor in Computer Science.",
        "I am currently working in consulting at Accenture Federal Services as a ServiceNow Developer."
    ];

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
        "PC Pro"
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
            url: "https://www.accenture.com",
            image: "accenture_logo.png",
            description: "I have been working for Accenture Federal Services as a ServiceNow Developer Analyst since the end of June 2021. AFS is a consulting firm that works with US Government clients. AFS is a subsidiary of Accenture, which is one of the largest technology consulting firm in the world!"
        },
        {
            url: "https://www.ameren.com/",
            image: "ameren_logo.png",
            description:"I was a co-op at Ameren Services from May 2020 to the end of June 2021. I worked as an IT Service Management Co-op doing Performance Analytics, Reporting, and Service Portal development work. Ameren is a Saint Louis based power company that serves over 2.5 million electric and gas customers across Illinois and Missouri. My responsibilities at Ameren range from ServiceNow Performance Analytics and Reporting to ServiceNow development."
        },
        {
            url: "https://www.truemfg.com",
            image: "truemfg_logo.png",
            description: "Previously, I worked as a Co-op Software Developer at True Manufacturing in O'Fallon Missouri. True is the leading manufacturer of commercial refrigeration units in the United States. At True I worked in an Agile environment developing dashboard applications for internal use on the Epicor ERP with C# and SQL."
        }
    ];

});